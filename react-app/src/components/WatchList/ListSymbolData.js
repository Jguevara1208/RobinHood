import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainGraph from "../MainGraph/MainGraph";

function ListSymbolData({symbol}){
    const graphData = useSelector(state => state.watchlistStocks[symbol])
    return (
        <>
            {graphData && 
                <Link to={`/stocks/${symbol}`}>
                    <p>{symbol}</p>
                    <MainGraph graphData={graphData} isWatchList={true}/>
                    <p>{`$${graphData[graphData.length - 1].price}`}</p>
                    <p>{`$${graphData[graphData.length - 1][`%`]}`}</p>
                </Link>
            }
        </>
    );
};

export default ListSymbolData