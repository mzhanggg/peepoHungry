import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from  "./components/SignupFormPage";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import DemoLogin from "./components/DemoLogin";
import BizIndex from "./components/Business/BusinessIndex";
import BusinessShow from "./components/Business/BusinessShow";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import RecentActivities from "./components/RecentActivity/RecentActivity";

function App() {
  const location = useLocation()
  const path = location.pathname;

  const categories = () => {
    if (path === '/') {
      return <Categories />;
    } else {
      return null;
    }
  }

  const recentActivity = () => {
    if (path === '/') {
      return <RecentActivities />;
    } else {
      return null;
    }
  }
  

  return (
    <>
      
      <Navigation />
      
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/login" element={<LoginFormPage />}>Log In</Route>
        <Route exact path="/signup" element={<SignupFormPage />}>Sign Up</Route>
        <Route exact path="/" element={<DemoLogin />}>Demo Login</Route>
        <Route exact path="/businesses/:businessId" element={<BusinessShow />}></Route>
        <Route exact path="/businesses" element={<BizIndex />}></Route>
      </Routes>
      
      {recentActivity()}
      {categories() }
      <Footer />
    </>
  );
}

export default App;
