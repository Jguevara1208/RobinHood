import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setWatchListStocks } from "../../store/watchlistStocks";
import ListSymbolData from "./ListSymbolData";
import { deleteUserList, updateUserList } from "../../store/userLists";

function List({list, listName=false , isStocks=false}){
    const dispatch = useDispatch();

    const [showList, setShowList] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [newListTitle, setNewListTitle] = useState(listName ? listName : list.listName)

    let symbols = Object.keys(list.symbols);

    useEffect(() => {
        (async () => {
           await dispatch(setWatchListStocks(symbols))
        })();
    },[dispatch])

    function editList(){
        setShowMenu(false)
        setShowEdit(true)
    }
    function handleTitleSave(){
        const updatedList = {
            id: list.id,
            list_name: newListTitle
        }
        dispatch(updateUserList(updatedList))
        setShowEdit(false)
    }

    function handleListDelete(){
        dispatch(deleteUserList(list.id))
        setShowMenu(false)
    }

    return (
        <>
            {showEdit ? 
            <div>
                <input type="text" value={newListTitle} onChange={(e)=> setNewListTitle(e.target.value)}/>
                <button onClick={handleTitleSave}>Save</button>
            </div>
            : 
            <div>
                <h1>{listName ? listName : list.listName}</h1>
                {!isStocks && 
                <p onClick={()=>setShowMenu(!showMenu)}>Menu</p>
                }
            </div>
            }
            {showMenu && (
                <div>
                    <p onClick={editList}>Edit List</p>
                    <p onClick={handleListDelete}>Delete List</p>
                </div>
            )}
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