/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const SET_STOCKS = 'allStocks/SET_STOCKS';


/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const setStocksAction = (allStocks) => ({
  type: SET_STOCKS,
  payload: allStocks
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllStocks = () => async (dispatch) => {
  const allStocks = await fetch('/api/stocks/');
  const stocks = await allStocks.json();
  dispatch(setStocksAction(stocks));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const allStocksReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_STOCKS:
            newState = [...action.payload.allStocks];
            return newState;
        default:
            return state;
    };
};

export default allStocksReducer;
