import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from  "./components/SignupFormPage";


function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginFormPage />}></Route>
      <Route exact path="/signup" element={<SignupFormPage />}></Route>
    </Routes>
  );
}

export default App;
