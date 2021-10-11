import {singleAssetGraphData}  from "../utils"
/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */
const ADD_WATCHLIST_STOCKS = "watchlistStocks/ADD_WATCHLIST_STOCKS";

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */
const addWatchListAction = (stocks) => {
  return {
    type: ADD_WATCHLIST_STOCKS,
    stocks,
  };
};

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */
export const setWatchListStocks = (symbols) => async (dispatch) => {
  let stockInfo = {};
  
  for (let i = 0; i < symbols.length; i++) {
    let symbol = symbols[i];
    const stockData = await singleAssetGraphData("D", symbol);
    stockInfo[symbol] = stockData
  }
  // symbols.forEach(async(symbol) => {
  //   const stockData = await singleAssetGraphData("D", symbol);
  //   stockInfo[symbol] = stockData;
  // });
  dispatch(addWatchListAction(stockInfo));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {};

const watchlistStocksReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_WATCHLIST_STOCKS:
      newState = action.stocks
      return newState;
    default:
      return state;
  }
};

export default watchlistStocksReducer;
