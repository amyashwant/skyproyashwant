import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import AccountPage from "../components/loginPageComponents/accountPage/AccountPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";

const LoginPage = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <BeadCumb />
      <AccountPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default LoginPage;
