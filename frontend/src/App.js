import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from  "./components/SignupFormPage";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
      {/* <nav>
          <ul>
            <li>
              <NavLink to="/">
                <img src="https://cdn.frankerfacez.com/emoticon/574321/4" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </nav> */}

      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/login" element={<LoginFormPage />}>Log In</Route>
        <Route exact path="/signup" element={<SignupFormPage />}>Sign Up</Route>
      </Routes>
    </>
  );
}

export default App;
