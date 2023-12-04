import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TeamsPage from "../screens/TeamsPage";
import Dashboard from "../screens/Dashboard";
import AboutPage from "../screens/AboutPage";
import ServicePage from "../screens/ServicePage";
import ContactPage from "../screens/ContactPage";
import PricingPage from "../screens/PricingPage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import PrivacyPage from "../screens/PrivacyPage";
import TermsPage from "../screens/TermsPage";
import RefundPage from "../screens/RefundPage";
import CompliancePage from "../screens/CompliancePage";
import PackagePage from "../screens/PackagePage";
import AccountContext from "../utils/AccountContext";

const AppLayout = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const data = {
    login,
    setLogin,
    userData,
    setUserData,
  };

  const cookieData = localStorage.getItem("userInfo");

  useEffect(() => {
    console.log("useEffect hitted applayout");
    if (cookieData) {
      setLogin(true);
      setUserData(JSON.parse(cookieData));
    } else {
      setLogin(false);
      setUserData(null);
    }
  }, [cookieData]);

  return (
    <div>
      <AccountContext.Provider value={data}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/packages" element={<PackagePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
          </Routes>
        </Router>
      </AccountContext.Provider>
    </div>
  );
};

export default AppLayout;
