/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

    const SET_USER_LISTS = 'userLists/SET_USER_LISTS';
    const UPDATE_USER_LIST = 'userLists/UPDATE_USER_LIST';
    const DELETE_USER_LIST = 'userLists/DELETE_USER_LIST';
    const ADD_USER_LIST = 'userLists/ADD_USER_LIST';

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

    const setUserListsAction = (lists) => {
        return {
            type: SET_USER_LISTS,
            lists
        };
    };

    const updateUserListAction = (list) => {
        return {
            type: UPDATE_USER_LIST,
            list
        };
    };

    const deleteUserListAction = (listId) => {
        return {
            type: DELETE_USER_LIST,
            listId
        };
    };

    const addUserListAction = (list) => {
        return {
            type: ADD_USER_LIST,
            list
        };
    };

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const setUserLists = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/lists/`);
    const lists = await res.json();
    dispatch(setUserListsAction(lists))
};

export const updateUserList = (list) => async (dispatch) => {
};

export const deleteUserList = (listId) => async (dispatch) => {
    await fetch(`/api/lists/${listId}/`, {
        method: "DELETE"
    })
    dispatch(deleteUserListAction(listId))
};

export const addUserList = (list) => async (dispatch) => {
    console.log(list.user_id)
    const res = await fetch(`/api/users/${list.user_id}/lists/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(list)
    })
    const newList = await res.json()
    console.log(newList, 'NEW LIST IN THUNK FROM RES')
    dispatch(addUserListAction(newList))
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {}

const userListsReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER_LISTS:
            newState = {...action.lists}
            return newState;
        case UPDATE_USER_LIST:
            newState = {...state}
            newState[action.list.id] = action.list
            return newState;
        case DELETE_USER_LIST:
            newState = {...state}
            delete newState[action.listId]
            return newState;
        case ADD_USER_LIST:
            newState = {...state}
            newState[action.list.id] = action.list
            return newState;
        default:
            return state;
    }
}

export default userListsReducer;