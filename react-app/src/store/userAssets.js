/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const SET_USER_ASSETS = 'userAssets/SET_USER_ASSETS';
const ADD_USER_ASSET = 'userAssets/ADD_USER_ASSETS';
const UPDATE_USER_ASSET = 'userAssets/UPDATE_USER_ASSET';
const DELETE_USER_ASSET = 'userAssets/DELETE_USER_ASSET';

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const setAssetsAction = (assets) => {
    return {
        type: SET_USER_ASSETS,
        assets
    };
};

const addAssetAction = (asset) => {
    return {
        type: ADD_USER_ASSET,
        asset
    };
};

const updateAssetAction = (updatedAsset) => {
    return {
        type: UPDATE_USER_ASSET,
        updatedAsset
    };
};

const deleteAssetAction = (symbol) => {
    return {
        type: DELETE_USER_ASSET,
        symbol
    };
};


/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const setUserAssets = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/assets`);
    const assets = await res.json();
    dispatch(setAssetsAction(assets));
};

export const  addUserAsset = (userId, asset) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/assets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(asset)
    });
    const newAsset = await res.json();
    dispatch(addAssetAction(newAsset));
};

export const updateUserAsset = (userId, updatedAsset) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/assets/${updatedAsset.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAsset)
    });
    // TODO: line 74 & 75 is for testing, remove after confirmation of functionality
    const updatedAssetRes = await res.json();
    console.log(updatedAssetRes);
    dispatch(updateAssetAction(updatedAsset));
};

export const deleteUserAsset = (userId, asset) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/assets/${asset.id}`, {
        method: "DELETE"
    });
    //TODO: line 84 & 85 is for testing, remove after confirmation of functionality
    const apiRes = await res.json();
    console.log(apiRes);
    dispatch(deleteAssetAction(asset.symbol));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {}

const userAssetsReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER_ASSETS:
            newState = {};
            action.assets.forEach(asset => newState[asset.symbol] = asset);
            return newState;
        case ADD_USER_ASSET:
            newState = {...state};
            newState[action.asset.symbol] = action.asset;
            return newState;
        case UPDATE_USER_ASSET:
            newState = {...state};
            newState[action.asset.symbol] = action.asset;
            return newState;
        case DELETE_USER_ASSET:
            newState = {...state}
            delete newState[action.symbol];
            return newState;
        default:
            return state;
    };
};

export default userAssetsReducer;