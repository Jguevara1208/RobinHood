/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const SET_LISTS = "userLists/SET_LISTS";
const REMOVE_LIST = "userLists/REMOVE_LIST";

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const setListsAction = (lists) => ({
    type: SET_LISTS,
    lists
});

const removeListAction = (listId) => ({
    type: REMOVE_LIST,
    listId
})

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchList = (userId) => async (dispatch) => {
    console.log("In thunk")
    const response = await fetch(`/api/users/${userId}/lists`);
    const lists = await response.json();
    dispatch(setListsAction(lists))
}

export const addList = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/lists`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    const lists = await response.json();
    dispatch(setListsAction(lists));
}

export const removeList = (listId) => async (dispatch) => {
    const response = await fetch(`/api/lists/${listId}/`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    dispatch(removeListAction(listId))
}

export const updateList = (userId, listId) => async (dispatch) => {
    const response = await fetch(`/api/lists/${listId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    dispatch(setListsAction(userId));
}


/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {}
//Should look like this: 
/**
 *  {
 *      listId: {
 *          listName: '',
 *          symbols: [
 *              'SNAP',
 *              'AAPL',
 *          ]
 *      }
 *  } 
 */
export default function userListReducer(state = initialState, action) {
    switch(action.type){
        case SET_LISTS:
            return {...state, ...action.lists}
        case REMOVE_LIST:
            const newState = {...state};
            delete newState[action.listId];
            return newState
        default:
            return state;
    }
}
