import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { setCurrentStock } from './store/currentStock' //symbol, res
import { fetchAllStocks } from './store/allStocks'
import { setGeneralStories } from  './store/currentStories'
import { setTheme } from './store/theme'
import { setUserAssets } from './store/userAssets' //id
import { setUserLists } from './store/userLists'
import { setWatchListStocks } from './store/watchlistStocks' //symbols
import WatchList from './components/WatchList/WatchList';
import MainGraph from './components/MainGraph/MainGraph';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const graphData = useSelector(state => state.currentStock.graphData)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      await dispatch(setUserLists(1))

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
            <WatchList/>
          {/* <MainGraph graphData={graphData}  /> */}
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
