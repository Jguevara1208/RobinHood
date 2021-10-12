import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { addListSymbol, addUserList, setUserLists } from "../../store/userLists"



function AddToList({symbol, userId}) {
    const dispatch = useDispatch()
    const lists = useSelector(state => state.userLists)
    const [openLists, setOpenLists] = useState(false)
    const [showNewList, setShowNewList] = useState(false)
    const [newListName, setNewListName] = useState('')

    useEffect(() => {
        dispatch(setUserLists(userId))
    },[dispatch])

    // useEffect(() => {
    //     Object.keys(lists).forEach(key => {
    //          const symbolsInList = Object.keys(lists[key].symbols)
    //          if(symbolsInList.includes(symbol)){
    //              setInList(true)
    //          }
    //      })
    // }, [dispatch, lists])

    function isInList(list){
        return list.symbols[symbol] ? true : false
    }

    function handleSubmit(){
        const listInputs = document.querySelectorAll(".listInputs")
        // console.log(listInputs)
        const checkedInputs = Array.from(listInputs).filter(list => list.checked)
        // console.log("CHECKED",checkedInputs)
        // console.log(checkedInputs[0].attributes.id)

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
      <div>
        <button onClick={() => setOpenLists(!openLists)}>Add to Lists</button>
        {openLists && (
          <div>
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
        )}
      </div>
    );
}

export default AddToList
