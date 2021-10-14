import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainGraph from "../MainGraph/MainGraph";

function ListSymbolData({symbol, isStocks, listId, id}){
    const graphData = useSelector(state => state.watchlistStocks[symbol])

    let isPos = graphData?.[graphData.length - 1]["%"][0] === "+" ? "pos" : "neg";

    return (
        <>
            {graphData &&
            <div className='delete-container'>
                <Link to={`/stocks/${symbol}`}>
                    <div className="list-stock-wrapper">
                        <p>{symbol}</p>
                        <MainGraph graphData={graphData} isWatchList={true} isPos={isPos}/>
                        <div className="list-price">
                            <p>{`$${graphData[graphData.length - 1].price}`}</p>
                            <p className={`${isPos}`}>{`${graphData[graphData.length - 1][`%`]}%`}</p>
                        </div>
                    </div>
                </Link>
            </div> 
            }
        </>
    );
};

export default ListSymbolData