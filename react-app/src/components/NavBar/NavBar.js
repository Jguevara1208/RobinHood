
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
            <NavLink to='/' exact={true} activeClassName='active'>
              RobinHood
            </NavLink>
          {
            !session.email ?
            (
              <div class="user-actions-container">
                  <NavLink className="login-button"to='/login' exact={true} activeClassName='active'>
                    Login
                  </NavLink>
                  <NavLink className="sign-up-button" to='/sign-up' exact={true} activeClassName='active'>
                    Sign Up
                  </NavLink>
              </div>
            )
              :
              <>
                <SearchBar/>
                <LogoutButton />
              </>
          }
      </nav>
    );
  }

}

export default NavBar;
