import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { updateUserList, deleteUserList } from '../../store/userLists';
import { deleteListSymbol } from '../../store/userLists';
import { MdDeleteOutline } from 'react-icons/md';
import MainGraph from '../MainGraph/MainGraph';


function EditWatchList({ list, setShowModal}){
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    const graphData = useSelector(state => state.watchlistStocks)
    const userAssetsGraph = useSelector(state => state.userAssets.graphData)

    const overAllIsPos = userAssetsGraph?.[userAssetsGraph.length - 1]['%'][0] === '+' ? 'pos' : 'neg'

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
        <div className={theme} >
            <div className='title-edit'>
                <div className='edit-list-title'>
                    <p>List Title</p>
                    <input
                        type="text"
                        value={newListTitle}
                        onChange={(e) => setNewListTitle(e.target.value)}
                        className={`${overAllIsPos}-edit-input`}
                    />
                </div>
                <button className={`${overAllIsPos}-save-button`} onClick={handleTitleSave}>Save</button>
            </div>
            <div className='edit-list-symbols' >
                <p className='edit-symbols-title' >Stocks in this list</p>
                {symbols &&
                    symbols.map((symbol) => (
                        <div className='edit-list-symbol-info'>
                            {graphData && (
                                <>
                                    <div className="edit-list-wrapper">
                                        <p className='edit-list-symbol'>{symbol}</p>
                                        <div className='edit-graph'>
                                            <MainGraph graphData={graphData[symbol]} isWatchList={true} isPos={isPos(symbol)} />
                                        </div>
                                        <p className='edit-list-price'>{`$${graphData?.[symbol]?.[graphData[symbol].length - 1]?.price}`}</p>
                                        <p className={`${isPos(symbol)} edit-list-percent`}>{`${graphData?.[symbol]?.[graphData[symbol]?.length - 1][`%`]}%`}</p>
                                        <MdDeleteOutline className={`${isPos(symbol)}-edit-list-symbol-delete`} onClick={() => handleDelete(symbol, list?.symbols[symbol]?.listId, list?.symbols[symbol]?.id)} />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
            </div>
            <div className='edit-delete-and-cancel'>
                <button className='edit-list-delete-button' onClick={handleListDelete}>Delete List</button>
                <p onClick={() => setShowModal(false)}>Cancel</p>
            </div>
        </div>
    );
};

export default EditWatchList;