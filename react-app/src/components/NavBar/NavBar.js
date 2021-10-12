
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
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
              Home
            </NavLink>
          {
            !session.email ?
            (
              <div class="user-actions-container">
                  <NavLink to='/login' exact={true} activeClassName='active'>
                    Login
                  </NavLink>
                  <NavLink to='/sign-up' exact={true} activeClassName='active'>
                    Sign Up
                  </NavLink>
              </div>
            )
              :
              <LogoutButton />
          }
      </nav>
    );
  }

}

export default NavBar;
