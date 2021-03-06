import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from './store/session';
import { fetchAllStocks } from './store/allStocks';
import { setTheme } from './store/theme';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Index from './components/SplashPage/SplashPage'
import Portfolio from './components/PortfolioPage/Portfolio';
import SingleAsset from './components/SingleAssetPage/SingleAsset';
import './index.css'


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session);
  const theme = useSelector(state => state.theme);
  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      dispatch(setTheme())
      await dispatch(fetchAllStocks())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <div className={`${theme} app`}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          { user.id
          ?
            <ProtectedRoute path='/' exact={true} >
              <Portfolio />
            </ProtectedRoute>
          :
            <Route path='/' exact={true}>
              <Index/>
            </Route>
          }
          <ProtectedRoute path='/stocks/:symbol'>
            <SingleAsset/>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
