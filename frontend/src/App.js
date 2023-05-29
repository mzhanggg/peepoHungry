import LoginFormPage from "./components/LoginFormPage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginFormPage />}></Route>
    </Routes>
  );
}

export default App;
