
import React from 'react';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'

const NavBar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/sign-up';
  let session = useSelector(state => state.session);

  if (isLoginPage || isSignUpPage) {
    return null
  } else {
    return (
      <nav>
          {
            !session.email ?
            (
              <>
              <NavLink to='/' exact={true} activeClassName='active'>RobinHood</NavLink>
              <div class="user-actions-container">
                <NavLink className="login-button"to='/login' exact={true} activeClassName='active'>Log in</NavLink>
                <NavLink className="sign-up-button" to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
              </div>
              </>
            )
              :
              <>
                <NavLink to='/' exact={true} activeClassName='active'>RobinHood test</NavLink>
                <SearchBar/>
                <LogoutButton />
              </>
          }
      </nav>
    );
  }

}

export default NavBar;
