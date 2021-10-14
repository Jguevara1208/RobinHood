import { useSelector, useDispatch } from "react-redux";
import { formatThousands } from "./utils";
import { useState } from "react";
import { updateUserAsset, deleteUserAsset, addUserAsset } from "../../store/userAssets";
import { editBuyingPower } from "../../store/session";
function BuySellStocks({price, symbol, isPos}){
    const dispatch = useDispatch()

    const buyingPower = useSelector(state => state.session.buyingPower)
    const assets = useSelector(state => state.userAssets)
    const userId = useSelector(state => state.session.id)
    const asset = assets?.[symbol]
    const [isBuy, setIsBuy] = useState(true);
    const [buyShares, setBuyShares] = useState(null)
    const [sellShares, setSellShares] = useState(null)
    const [error, setError] = useState(null)
    // console.log(isPos)

    function handleOrder(){
        if (isBuy) {
            let totalCost = Number((buyShares * price).toFixed(2))
            let shares, average, newBuyingPower;
            if (totalCost > Number(buyingPower)) return setError('You do not have enough Buying Power')
            newBuyingPower = Number((Number(buyingPower) - totalCost).toFixed(2))

            if (asset) {
                shares = Number(buyShares) + asset.shares
                average = Number((asset.average + (buyShares / price)).toFixed(2))
                dispatch(updateUserAsset({
                            id: asset.id,
                            shares,
                            average
                        }))
            } else {
                shares = Number(buyShares)
                average = Number(price)
                dispatch(addUserAsset({
                    user_id: userId,
                    symbol,
                    shares,
                    average
                }))
            }
            dispatch(editBuyingPower(userId, newBuyingPower))
            setBuyShares(0)
            setError(null)
        } else {
            if (asset) {
                let totalCredit = Number((sellShares * price).toFixed(2))
                if (sellShares > asset.shares) return setError('You do not have that many shares to sell')
                let shares = asset.shares - sellShares
                let removeAsset = shares <= 0 ? true : false
                let newBuyingPower = Number((buyingPower + totalCredit).toFixed(2))
                if (removeAsset){
                    dispatch(deleteUserAsset(asset))
                } else {
                    dispatch(updateUserAsset({
                        id: asset.id,
                        shares,
                        average: asset.average
                    }))
                }
                dispatch(editBuyingPower(userId, newBuyingPower))
                setSellShares(0)
                setError(null)
            } else {
                setError(`You do not own any shares of ${symbol}`)
            }
        }
    }

    function sellAllShares(){
        let totalCredit = asset.shares * price
        let newBuyingPower = totalCredit + buyingPower
        dispatch(editBuyingPower(userId, newBuyingPower))
        dispatch(deleteUserAsset(asset))
    }

    function handleBNSBuy(){
        setIsBuy(true)
        setError(null)
        setSellShares(0)
        setBuyShares(0)
    }

    function handleBNSSell(){
        setIsBuy(false)
        setError(null)
        setBuyShares(0)
        setSellShares(0)
    }



    return (
      <div className="bns-wrapper">
        <div className="bns-top">
          <p
            onClick={handleBNSBuy}
            className={isBuy ? `trade-active ${isPos}-bns` : "bns-click"}
          >
            Buy {symbol}
          </p>
          {asset ? (
            <p
              onClick={handleBNSSell}
              className={!isBuy ? `trade-active ${isPos}-bns` : "bns-click"}
            >
              Sell {symbol}
            </p>
          ) : null}
        </div>
        <div className="bns-shares">
          <p>Shares</p>
          {isBuy ? (
            <input
              className={`${isPos}-bp-input1`}
              value={buyShares}
              type="number"
              onChange={(e) => setBuyShares(e.target.value)}
              placeholder="0"
            />
          ) : (
            <input
              className={`${isPos}-bp-input1`}
              value={sellShares}
              type="number"
              onChange={(e) => setSellShares(e.target.value)}
              placeholder="0"
            />
          )}
        </div>
        <div className="bns-interior">
          <div className="bns-market-price">
            <p className={`${isPos}-mark-price`}>Market Price</p>
            <p>${price}</p>
          </div>
          {isBuy ? (
            <div className="bns-estimation">
              <p>Estimated Cost</p>
              <p>${formatThousands(buyShares * price)}</p>
            </div>
          ) : (
            <div className="bns-estimation">
              <p>Estimated Credit</p>
              <p>${formatThousands(sellShares * price)}</p>
            </div>
          )}
        </div>
        <div className="bns-complete-order">
          {isBuy ? (
            <button className={`${isPos}-bns-button`} onClick={handleOrder}>
              Complete Order
            </button>
          ) : (
            <button
              className={`${isPos}-bns-button`}
              onClick={handleOrder}
              disabled={asset ? false : true}
            >
              Complete Order
            </button>
          )}
        </div>
        <div className="bns-singleItem">
          {isBuy ? (
            <div className="bns-bp-wrapper">
              <p className={`${isPos}-bns-bp`}>
                ${formatThousands(buyingPower)} Buying Power Available
              </p>
              {error && <p className="bns-bp-error">{error}</p>}
            </div>
          ) : (
            <div className="bns-bp-wrapper">
              <p>
                {asset ? asset.shares : 0} Shares Available -
                <span className={`${isPos}-sell-all`} onClick={sellAllShares}>
                  {asset ? " Sell All" : ""}
                </span>
              </p>
              {error && <p className="bns-bp-error">{error}</p>}
            </div>
          )}
        </div>
      </div>
    );
};

export default BuySellStocks