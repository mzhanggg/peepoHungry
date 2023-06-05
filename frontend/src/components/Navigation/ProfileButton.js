import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./ProfileButton.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
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
  };

  return (
    <>
      <button id="profile-icon" onClick={openMenu}>
        <img id="profile-icon" src="https://cdn.frankerfacez.com/emoticon/240746/4"></img>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>About Me</li>
          <li>My Collection</li>
          <li>Find Friends</li>
          <li>Account Settings</li>
          <li>
            <button id="nav-btn"onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;