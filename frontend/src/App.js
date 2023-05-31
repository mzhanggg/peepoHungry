import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from  "./components/SignupFormPage";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import DemoLogin from "./components/DemoLogin";
import BizIndex from "./components/Business/BusinessIndex";
import BusinessShow from "./components/Business/BusinessShow";

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
            <l``i>
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
        <Route exact path="/" element={<DemoLogin />}>Demo Login</Route>
        <Route exact path="/businesses/:businessId" element={<BusinessShow />}></Route>

      </Routes>
    </>
  );
}

export default App;
