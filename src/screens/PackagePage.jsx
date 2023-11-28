import React from "react";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import PackageMainPage from "../components/packagePageComponents/PackageMainPage";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";

const PackagePage = () => {
  return (
    <div>
      <Header />
      {/* <BeadCumb/> */}
      <PackageMainPage />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default PackagePage;
