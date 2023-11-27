import React from "react";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import PrivacyPageOne from "../components/privacyPageComponents/PrivacyPageOne";

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <PrivacyPageOne />
      <FooterContact />
      <Footer />
    </>
  );
};

export default PrivacyPage;
