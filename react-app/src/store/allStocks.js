/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const SET_STOCKS = 'stocks/SET_STOCKS';


/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const setStocksAction = allStocks => ({
  type: SET_STOCKS,
  payload: allStocks
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllStocks = () => async (dispatch) => {
  console.log("In the fetchAllStocks thunk")
  const allStocks = await fetch('/api/stocks/');
  const Stocks = await allStocks.json();
  console.log(Stocks)

  dispatch(setStocksAction(Stocks));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const allStocksReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_STOCKS:
            newState = [...action.payload.allStocks];
            return newState;
        default:
            return state;
    };
};

export default allStocksReducer;
