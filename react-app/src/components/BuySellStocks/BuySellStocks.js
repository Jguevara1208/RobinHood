import { useSelector, useDispatch } from "react-redux";
import { formatThousands } from "./utils";
import { useState } from "react";
import { updateUserAsset, deleteUserAsset, addUserAsset } from "../../store/userAssets";
import { editBuyingPower } from "../../store/session";
function BuySellStocks({price, symbol}){
    const dispatch = useDispatch()

    const buyingPower = useSelector(state => state.session.buyingPower)
    const assets = useSelector(state => state.userAssets)
    const userId = useSelector(state => state.session.id)
    const asset = assets?.[symbol]
    const [isBuy, setIsBuy] = useState(true);
    const [buyShares, setBuyShares] = useState(null)
    const [sellShares, setSellShares] = useState(null)
    const [error, setError] = useState(null)

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

    return (
        <div>
            <p onClick={() => setIsBuy(true)} className={isBuy ? 'trade-active' : ''}>Buy {symbol}</p>
            <p onClick={() => setIsBuy(false)} className={!isBuy ? 'trade-active' : ''}>Sell {symbol}</p>
            <div>
                <p>Shares</p>
                {isBuy 
                    ? <input value={buyShares} type="number" onChange={(e) => setBuyShares(e.target.value)}/>
                    : <input value={sellShares} type="number" onChange={(e) => setSellShares(e.target.value)} />
                }
            </div>
            <div>
                <p>Market Price</p>
                <p>${price}</p>
            </div>
            {isBuy 
                ? 
                <div>
                    <p>Estimated Cost</p>
                    <p>${formatThousands((buyShares * price))}</p>
                </div>
                :
                <div>
                    <p>Estimated Credit</p>
                    <p>${formatThousands((sellShares * price))}</p>
                </div>
            }
            <div>
                {isBuy 
                    ? <button onClick={handleOrder}>Complete Order</button>
                    : <button onClick={handleOrder} disabled={asset ? false : true}>Complete Order</button>
                }
            </div>
            {isBuy 
                ?
                <div>
                    <p>${formatThousands(buyingPower)} Buying Power Available</p>
                    {error && <p>{error}</p>}
                </div>
                :
                <div>
                    <p>{asset ? asset.shares : 0} Shares Available<span onClick={sellAllShares}>{asset ? ' - Sell All' : ''}</span></p>
                    {error && <p>{error}</p>}
                </div>
            }
        </div>
    );
};

export default BuySellStocks