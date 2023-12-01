import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import AccountPage from "../components/signupPageComponents/accountPage/AccountPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const SignupPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <BeadCumb />
      <AccountPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default SignupPage;
