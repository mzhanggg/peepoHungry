import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import DemoLogin from '../DemoLogin';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
        <>
          <div id="header-container">
            <NavLink id="title" to="/">
              <img src="https://cdn.frankerfacez.com/emoticon/574321/4" alt="" />
            </NavLink>
            <h1 id="title">peepoHungry</h1>
          </div>

        <div id="user">
          <ProfileButton user={sessionUser} />
        </div>

        </>
      )
    } else {
      sessionLinks = (
        <>
          <div id="header-container">
            <NavLink id="title" to="/">
              <img src="https://cdn.frankerfacez.com/emoticon/530821/4" alt="" />
            </NavLink>
            <h1 id="title">peepoHungry</h1>
          </div>

          <div id="auth">
            <NavLink id="btn" to="/login">Log In</NavLink>
            <NavLink id="btn"to="/signup">Sign Up</NavLink>
            <DemoLogin />
          </div>
        </>
      );
    }

  return (
    <ul id="nav">
      <li>
        {sessionLinks}
      </li>
    </ul>
  );

}

export default Navigation;