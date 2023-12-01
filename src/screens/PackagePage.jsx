import React from "react";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import PackageMainPage from "../components/packagePageComponents/PackageMainPage";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import PaymentSection from "../components/packagePageComponents/PaymentSection";

const PackagePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      {/* <BeadCumb/> */}
      <PackageMainPage />
      <PaymentSection/>
      <FooterContact />
      <Footer />
    </div>
  );
};

export default PackagePage;
