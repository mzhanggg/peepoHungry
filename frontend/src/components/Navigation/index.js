import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import DemoLogin from '../DemoLogin';
import Carousel from '../Homepage/Carousel';
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
              <img id="logo"src="https://cdn.frankerfacez.com/emoticon/530821/4" alt="" />
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
    
    const location = useLocation()
    
    const carousel = () => {
      const path = location.pathname;
      
      if (path === '/') {
        return <Carousel />;
      } else {
        return null;
      }
    }

  

  return (
    <div className="header">
      
      <ul id="nav">
        <li>
          {sessionLinks}
        </li>
      </ul>
      
      {carousel()}
    </div>
  );

}

export default Navigation;