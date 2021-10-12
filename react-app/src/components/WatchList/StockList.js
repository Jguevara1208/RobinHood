import { useSelector } from 'react-redux';
import List from './List'

function StockList() {

    const assets = useSelector(state => state.userAssets)
    const listKeys = Object.keys(assets)
    let symbols = {}
    let hack = ['1']
    listKeys.slice(0, listKeys.length -1).forEach(symbol => {
        symbols[symbol] = symbol
    }) 
    console.log(symbols)
    
    return (
        <>
            {hack && hack.map(key => (
                <List list={{'symbols': symbols}} listName={'Stocks'} isStocks={true} />
            ))}
        </>
    );
};

export default StockList;