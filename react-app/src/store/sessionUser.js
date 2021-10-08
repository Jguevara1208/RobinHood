/* ----------------------------------------------------------------------- */
/* --------------------------------Actions-------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_USER_INFO = 'sessionUser/GET_USER_INFO';
const DELETE_USER_INFO = 'sessionUser/DELETE_USER_INFO';
const EDIT_BUYING_POWER = 'sessionUser/EDIT_BUYING_POWER';

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getUserInfoAction = (userInfo) => {
    return {
        type: GET_USER_INFO,
        userInfo
    };
};

const deleteUserInfoAction = () => {
    return {
        type: DELETE_USER_INFO
    };
};

const editBuyingPowerAction = (buyingPower) => {
    return {
        type: EDIT_BUYING_POWER,
        buyingPower
    };
};

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const getUserInfo = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const userInfo = await res.json();
    dispatch(getUserInfoAction(userInfo));
}

export const deleteUserInfo = () => (dispatch) => {
    dispatch(deleteUserInfoAction());
};

export const editBuyingPower = (userId, newBuyingPower) => async (dispatch) => {
    await fetch(`/api/users/${userId}/buying-power`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBuyingPower)
    });

    dispatch(editBuyingPowerAction(newBuyingPower));
}

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    buyingPower: null
}

const sessionUserReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_USER_INFO:
            newState = {...state}
            newState.id = action.id;
            newState.firstName = action.firstName;
            newState.lastName = action.lastName;
            newState.email = action.email;
            newState.buyingPower = action.buyingPower;
            return newState;
        case DELETE_USER_INFO:
            newState = {...initialState};
            return newState;
        case EDIT_BUYING_POWER:
            newState = {...state};
            newState.buyingPower = action.buyingPower;
            return newState;
        default:
            return state;
    };
};

export default sessionUserReducer