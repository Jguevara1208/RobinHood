/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const SET_STOCKS = 'stocks/SET_STOCKS';


/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const setStocksAction = allStocks => ({
  type: SET_STOCKS,
  allStocks
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllStocks = () => async (dispatch) => {
  const allStocks = await fetch('/stocks');
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
            newState = [...action.allStocks];
            return newState;
        default:
            return state;
    };
};

export default allStocksReducer;
