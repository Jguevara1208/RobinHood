import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setWatchListStocks } from "../../store/watchlistStocks";
import ListSymbolData from "./ListSymbolData";
import { deleteUserList, updateUserList } from "../../store/userLists";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {BiDotsHorizontal} from 'react-icons/bi'

function List({list, listName=false , isStocks=false, isPos}){
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
        {showEdit ? (
          <div>
            <input
              type="text"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
            />
            <button onClick={handleTitleSave}>Save</button>
          </div>
        ) : (
          <div className="list-title-edit">
            <h1>{listName ? listName : list.listName}</h1>
            <div className="list-settings">
              {!isStocks && <p onClick={() => setShowMenu(!showMenu)}><BiDotsHorizontal className={`${isPos}-menu`}/></p>}
              <p onClick={() => setShowList(!showList)}>
                {showList ? <IoIosArrowUp className={`${isPos}-arrow`} /> : <IoIosArrowDown className={`${isPos}-arrow`}/>}
              </p>
            </div>
          </div>
        )}
        {showMenu && (
          <div>
            <p onClick={editList}>Edit List</p>
            <p onClick={handleListDelete}>Delete List</p>
          </div>
        )}
        {showList && (
          <>
            {symbols &&
              symbols.map((symbol) => (
                <ListSymbolData
                  symbol={symbol}
                  isStocks={isStocks}
                  listId={list?.symbols[symbol]?.listId}
                  id={list?.symbols[symbol]?.id}
                />
              ))}
          </>
        )}
      </>
    );
};

export default List;