import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteListSymbol } from "../../store/userLists";
import MainGraph from "../MainGraph/MainGraph";

function ListSymbolData({symbol, isStocks, listId, id}){
    const dispatch = useDispatch()
    const graphData = useSelector(state => state.watchlistStocks[symbol])
    // console.log(listId, id)
    function handleDelete(){
        dispatch(deleteListSymbol({
            id,
            listId,
            symbol
        }))
    }

    return (
        <>
            {graphData &&
            <div>
                {!isStocks && 
                <p onClick={handleDelete}>Delete</p>
                }
                <Link to={`/stocks/${symbol}`}>
                    <p>{symbol}</p>
                    <MainGraph graphData={graphData} isWatchList={true}/>
                    <p>{`$${graphData[graphData.length - 1].price}`}</p>
                    <p>{`$${graphData[graphData.length - 1][`%`]}`}</p>
                </Link>
            </div> 
            }
        </>
    );
};

export default ListSymbolData