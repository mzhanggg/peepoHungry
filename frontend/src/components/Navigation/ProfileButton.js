import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as sessionActions from '../../store/session';
import "./ProfileButton.css"

function ProfileButton({ user }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    nav('/')
  };

  return (
    <>
      <button id="profile-icon" onClick={openMenu}>
        <img id="profile-icon" src="https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle.png"></img>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{sessionUser.fname} {sessionUser.lname}</li>
          <hr></hr>
          {/* <li>About Me</li>
          <li>My Collection</li>
          <li>Find Friends</li>
          <li>Account</li> */}
          <li>
            <button className="logout" id="nav-btn"onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;