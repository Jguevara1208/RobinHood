import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteListSymbol } from "../../store/userLists";
import MainGraph from "../MainGraph/MainGraph";

function ListSymbolData({symbol, isStocks, listId, id}){
    const dispatch = useDispatch()
    const graphData = useSelector(state => state.watchlistStocks[symbol])

    function handleDelete(){
        dispatch(deleteListSymbol({
            id,
            listId,
            symbol
        }))
    }

    let isPos = graphData?.[graphData.length - 1]["%"][0] === "+" ? "pos" : "neg";

    return (
        <>
            {graphData &&
            <div>
                {!isStocks && 
                <p onClick={handleDelete}>Delete</p>
                }
                <Link to={`/stocks/${symbol}`}>
                    <div className="list-stock-wrapper">
                        <p>{symbol}</p>
                        <MainGraph graphData={graphData} isWatchList={true} isPos={isPos}/>
                        <div className="list-price">
                            <p>{`$${graphData[graphData.length - 1].price}`}</p>
                            <p className={`${isPos}`}>{`$${graphData[graphData.length - 1][`%`]}`}</p>
                        </div>
                    </div>
                </Link>
            </div> 
            }
        </>
    );
};

export default ListSymbolData