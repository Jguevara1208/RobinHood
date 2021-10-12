import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Index from './components/SplashPage/SplashPage'
import Portfolio from './components/PortfolioPage/Portfolio';
import SingleAsset from './components/SingleAssetPage/SingleAsset';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())

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
  );
}


export default App;
