import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import userAssetsReducer from './userAssets';
import themeReducer from './theme';
import currentStoriesReducer from './currentStories';
import watchlistStocksReducer from './watchlistStocks';

const rootReducer = combineReducers({
  session,
  userAssets: userAssetsReducer,
  stories: currentStoriesReducer,
  theme: themeReducer,
  watchlistStocks: watchlistStocksReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
