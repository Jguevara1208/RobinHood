import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setWatchListStocks } from "../../store/watchlistStocks";
import ListSymbolData from "./ListSymbolData";

function List({list, listName=false}){
    const dispatch = useDispatch();

    const [showList, setShowList] = useState(true)

    let symbols = Object.keys(list.symbols);

    useEffect(() => {
        (async () => {
           await dispatch(setWatchListStocks(symbols))
        })();
    },[dispatch])

    return (
        <>
            <h1>{listName ? listName : list.listName}</h1>
            <p onClick={() => setShowList(!showList)} >{showList ? '^' : 'v'}</p>
            {showList && (
                <>
                    {symbols && symbols.map(symbol => (
                        <ListSymbolData symbol={symbol}/>
                    ))}
                </>
            )}
        </>
    );
};

export default List;