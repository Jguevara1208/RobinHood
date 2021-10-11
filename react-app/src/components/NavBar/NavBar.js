
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {

  let session = useSelector(state => state.session)

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

export default NavBar;
