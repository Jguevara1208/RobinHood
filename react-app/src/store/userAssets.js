import { multiAssetGraphData } from '../utils';

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

const updateAssetAction = (asset) => {
    return {
        type: UPDATE_USER_ASSET,
        asset
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

export const setUserAssets = (userId, resolution) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/assets/`);
    const assets = await res.json();
    const symbols = Object.keys(assets)
    assets['graphData'] = await multiAssetGraphData(resolution, symbols, assets)
    dispatch(setAssetsAction(assets));
};

export const  addUserAsset = (asset) => async (dispatch) => {
    console.log(asset)
    const res = await fetch(`/api/assets/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(asset)
    });
    const newAsset = await res.json();
    dispatch(addAssetAction(newAsset));
};

export const updateUserAsset = (updatedAsset) => async (dispatch) => {
    await fetch(`/api/assets/${updatedAsset.id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAsset)
    });
    dispatch(updateAssetAction(updatedAsset));
};

export const deleteUserAsset = (asset) => async (dispatch) => {
    await fetch(`/api/assets/${asset.id}/`, {
        method: "DELETE"
    });
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
            newState = action.assets
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
