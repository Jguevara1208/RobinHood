import { useSelector, useDispatch } from "react-redux";
import { formatThousands } from "./utils";
import { useState } from "react";
import { updateUserAsset, deleteUserAsset } from "../../store/userAssets";
import { editBuyingPower } from "../../store/session";
function BuySellStocks({price, symbol}){
    const dispatch = useDispatch()

    const buyingPower = useSelector(state => state.session.buyingPower)
    const assets = useSelector(state => state.userAssets)
    const userId = useSelector(state => state.session.id)

    const [isBuy, setIsBuy] = useState(true);
    const [buyShares, setBuyShares] = useState(null)
    const [sellShares, setSellShares] = useState(null)
    const [error, setError] = useState(null)

    function handleOrder(){
        if (isBuy) {
            let totalCost = Number((buyShares * price).toFixed(2))
            if (totalCost > Number(buyingPower)) return setError('You do not have enough Buying Power')
            let shares = Number(buyShares) + assets[symbol].shares
            let average = Number((assets[symbol].average + (buyShares / price)).toFixed(2))
            let newBuyingPower = Number((Number(buyingPower) - totalCost).toFixed(2))
            dispatch(updateUserAsset({
                        id: assets[symbol].id,
                        shares,
                        average
                    }))
            dispatch(editBuyingPower(userId, newBuyingPower))
            setBuyShares(0)
            setError(null)
        } else {
            let totalCredit = Number((sellShares * price).toFixed(2))
            if (sellShares > assets[symbol].shares) return setError('You do not have that many shares to sell')
            let shares = assets[symbol].shares - sellShares
            let newBuyingPower = Number((buyingPower + totalCredit).toFixed(2))
            dispatch(updateUserAsset({
                id: assets[symbol].id,
                shares,
                average: assets[symbol].average
            }))
            dispatch(editBuyingPower(userId, newBuyingPower))
            setSellShares(0)
            setError(null)
        }
    }

    function sellAllShares(){
        let totalCredit = assets[symbol].shares * price
        let newBuyingPower = totalCredit + buyingPower
        dispatch(editBuyingPower(userId, newBuyingPower))
        dispatch(deleteUserAsset(assets[symbol]))
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
                <button onClick={handleOrder} >Complete Order</button>
            </div>
            {isBuy 
                ?
                <div>
                    <p>${formatThousands(buyingPower)} Buying Power Available</p>
                    {error && <p>{error}</p>}
                </div>
                :
                <div>
                    <p>{assets[symbol]?.shares} Shares Available - <span onClick={sellAllShares}>Sell All</span></p>
                    {error && <p>{error}</p>}
                </div>
            }
        </div>
    );
};

export default BuySellStocks