import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { updateUserList, deleteUserList } from "../../store/userLists";
import { deleteListSymbol } from "../../store/userLists";
import ListSymbolData from "./ListSymbolData";
import MainGraph from "../MainGraph/MainGraph";


function EditWatchList({ list, setShowModal, listId, id}){
    const dispatch = useDispatch()

    const graphData = useSelector(state => state.watchlistStocks)

    const [newListTitle, setNewListTitle] = useState(list.listName)
    let symbols = Object.keys(list.symbols);

    function handleTitleSave() {
        const updatedList = {
            id: list.id,
            list_name: newListTitle
        }
        dispatch(updateUserList(updatedList))
    }

    function isPos(symbol) {
        let isPos = graphData?.[symbol][graphData[symbol].length - 1]["%"][0] === "+" ? "pos" : "neg";
        return isPos
    }

    function handleListDelete() {
        dispatch(deleteUserList(list.id))
        setShowModal(false)
    }

    function handleDelete(symbol, listId, id) {
        dispatch(deleteListSymbol({
            id,
            listId,
            symbol
        }))
    }


    return (
        <>
            <div>
                <input
                    type="text"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                />
                <button onClick={handleTitleSave}>Save</button>
            </div>
            <p onClick={handleListDelete}>Delete List</p>
            <>
                {symbols &&
                    symbols.map((symbol) => (
                        <div>
                            {graphData && (
                                <>
                                    <div className='delete-container'>
                                        <div className="list-stock-wrapper">
                                            <p>{symbol}</p>
                                            <MainGraph graphData={graphData[symbol]} isWatchList={true} isPos={isPos(symbol)} />
                                            <p>{`$${graphData?.[symbol]?.[graphData[symbol].length - 1]?.price}`}</p>
                                            <p className={`${isPos(symbol)}`}>{`$${graphData?.[symbol]?.[graphData[symbol]?.length - 1][`%`]}`}</p>
                                            <p onClick={() => handleDelete(symbol, list?.symbols[symbol]?.listId, list?.symbols[symbol]?.id)}>Delete Symbol</p>
                                        </div>
                                    </div>
                                </>
                            )}
                                {/* // symbol={symbol}
                                // listId={list?.symbols[symbol]?.listId}
                                // id={list?.symbols[symbol]?.id} */}
                        </div>

                    ))}
            </>
        </>
    );
};

export default EditWatchList;