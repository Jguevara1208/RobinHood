import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { addListSymbol, addUserList, setUserLists } from "../../store/userLists"
import { Modal } from "../../context/Modal";
import {AiOutlineClose} from 'react-icons/ai'


function AddToList({symbol, userId, isPos, stockName}) {
    const dispatch = useDispatch()
    const lists = useSelector(state => state.userLists)
    const [openLists, setOpenLists] = useState(false)
    const [showNewList, setShowNewList] = useState(false)
    const [newListName, setNewListName] = useState('')
    

    useEffect(() => {
        dispatch(setUserLists(userId))
    },[dispatch])

    function isInList(list){
        return list.symbols[symbol] ? true : false
    }

    function handleSubmit(){
        const listInputs = document.querySelectorAll(".listInputs")
        const checkedInputs = Array.from(listInputs).filter(list => list.checked)

        for(let i = 0; i < checkedInputs.length; i++){
            const input = checkedInputs[i]
            const listId = Number(input.attributes.id.value.split("-")[1])
            dispatch(addListSymbol(listId, symbol))
        }
    }

    function handleNewList(){
        dispatch(addUserList({
            user_id: userId,
            list_name: newListName
        }))
        setNewListName('')
        setShowNewList(false)
    }

    return (
      <div className="atl-wrapper">
        <button className={`${isPos}-atl-button`} onClick={() => setOpenLists(!openLists)}>Add to Lists</button>
        
        {openLists && (
          <Modal onClose={() => setOpenLists(false)}>
            <div className="atl-modal-wrapper">
                <div className="atl-close-btn">
                  <p>Add {symbol} to Your Lists</p>
                  <AiOutlineClose className="atl-close"/></div>
                {showNewList ? 
                <div>
                    <input type="text" placeholder="List Name" value={newListName} onChange={(e)=> setNewListName(e.target.value)}/>
                    <div>
                        <button onClick={()=>setShowNewList(false)}>Cancel</button>
                        <button onClick={handleNewList}>Create List</button>
                    </div>
                </div> 
                : 
                <div onClick={()=> setShowNewList(true)}>
                    <div>+</div>
                    <div>
                        <p>Create New List</p>
                    </div>
                </div>}
              {Object.keys(lists).map((key) => (
                <div>
                  <input className="listInputs" id={`list-${lists[key].id}`} type="checkbox" disabled={isInList(lists[key]) ? true : false}/>
                  <div>
                    <p>{lists[key].listName}</p>
                    <p>{Object.keys(lists[key].symbols).length} items</p>
                    <p>{isInList(lists[key]) ? "Already in list" : ''}</p>
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit}>Save Changes</button>
            </div>
          </Modal>
        )}
      </div>
    );
}

export default AddToList
