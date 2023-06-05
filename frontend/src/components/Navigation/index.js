import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import DemoLogin from '../DemoLogin';
import Carousel from '../Homepage/Carousel';
// import SearchBar from '../Search';
import './Navigation.css';


function Navigation() {

  const location = useLocation()
  const path = location.pathname;
  
  const carousel = () => {
    if (path === '/') {
      return <Carousel />;
    } else {
      return null;
    }
  }

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
        <>
          <div id="left-nav">
            <NavLink id="title" to="/">
              <img id="logo" src="https://cdn.frankerfacez.com/emoticon/574321/4" alt="" />
            </NavLink>
            <NavLink id="title-text" to="/">peepoHungry</NavLink>
          </div>
          
          <div id="right-nav">
            <div id="user">
              <NavLink id="nav-btn" to="/businesses">Restaurants</NavLink>
              <ProfileButton user={sessionUser} />
            </div>
          </div>
        </>
      )
    } else {
      sessionLinks = (
        <>
          <div id="left-nav">
            <NavLink id="title" to="/">
              <img id="logo"src="https://cdn.frankerfacez.com/emoticon/530821/4" alt="" />
            </NavLink>
            <NavLink id="title-text" to="/">peepoHungry</NavLink>
          </div>

          <div id="right-nav" style={{ display: (path === '/login' || path === '/signup') ? 'none' : 'block' }}>
            <NavLink id="nav-btn" to="/businesses">Restaurants</NavLink>
            <NavLink id="nav-btn" to="/login">Log In</NavLink>
            <NavLink id="nav-btn"to="/signup">Sign Up</NavLink>
            <DemoLogin />
          </div>
  
        </>

      );
    }

  return (
      <header>
        <ul id="nav">
          <li id="nav-items">
            {sessionLinks}
          </li>
        </ul>
        
        {carousel()}
      </header>
  );

}

export default Navigation;