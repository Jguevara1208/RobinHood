import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import {setCompanyStories, setGeneralStories} from './store/currentStories'
import {setWatchListStocks} from './store/watchlistStocks'
import { fetchAllStocks } from './store/allStocks';
import { setUserAssets } from './store/userAssets';
import { fetchList } from './store/userLists';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(setGeneralStories());
      await dispatch(fetchAllStocks());
      /**
       * The two dispatch function below rely on a userId to function.
       * For testing purposes, I am going to use a userId of 1
       */
      await dispatch(fetchList(1))
      await dispatch(setUserAssets(1))
      await dispatch(setWatchListStocks(['AAPL', 'GME', 'GOOG', 'ABNB']))
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
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
