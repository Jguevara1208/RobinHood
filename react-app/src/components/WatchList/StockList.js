import { useSelector } from 'react-redux';
import List from './List'

function StockList({isPos}) {

    const assets = useSelector(state => state.userAssets)
    const listKeys = Object.keys(assets)
    let symbols = {}
    let hack = ['1']
    listKeys.slice(0, listKeys.length -1).forEach(symbol => {
        symbols[symbol] = symbol
    }) 
    
    return (
        <>
            {hack && hack.map(key => (
                <List list={{'symbols': symbols}} listName={'Stocks'} isStocks={true} isPos={isPos}/>
            ))}
        </>
    );
};

export default StockList;