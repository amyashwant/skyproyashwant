import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TeamsPage from "../screens/TeamsPage";
import Dashboard from "../screens/Dashboard";
import Packages from "../screens/Packages";
import AboutPage from "../screens/AboutPage";
import ServicePage from "../screens/ServicePage";
import ContactPage from "../screens/ContactPage";
import PricingPage from "../screens/PricingPage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";

const AppLayout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default AppLayout;
