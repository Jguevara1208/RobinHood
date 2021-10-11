import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setWatchListStocks } from "../../store/watchlistStocks";
import ListSymbolData from "./ListSymbolData";

function List({list}){
    const dispatch = useDispatch();
    const symbols = Object.keys(list.symbols);

    useEffect(() => {
        (async () => {
           await dispatch(setWatchListStocks(symbols))
        })();
    })

    return (
        <>
            <h1>{list.listName}</h1>
            {symbols && symbols.map(symbol => (
                <ListSymbolData symbol={symbol}/>
            ))}
        </>
    );
};

export default List;