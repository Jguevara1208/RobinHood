import {singleAssetGraphData}  from "../utils"
/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */
const SET_WATCHLIST_STOCKS = "watchlistStocks/SET_WATCHLIST_STOCKS";
const ADD_WATCHLIST_STOCK = 'watchlistStocks/ADD_WATCHLIST_STOCK';
const DELETE_WATCHLIST_STOCK = 'watchlistStocks/DELETE_WATCHLIST_STOCK';

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */
const setWatchListAction = (stocks) => {
  return {
    type: SET_WATCHLIST_STOCKS,
    stocks,
  };
};


/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const setWatchListStocks = (symbols) => async (dispatch) => {
  let stockInfo = {};
  let error = false
  for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i];
    const stockData = await singleAssetGraphData("D", symbol);
    if (stockData) {
      stockInfo[symbol] = stockData
    } else {
      error = true
    }
  }
  if (error) {
    return 
  } else {
    dispatch(setWatchListAction(stockInfo));
  }
};


/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {};

const watchlistStocksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_WATCHLIST_STOCKS:
      newState = {...state, ...action.stocks}
      return newState;
    default:
      return state;
  }
};

export default watchlistStocksReducer;
