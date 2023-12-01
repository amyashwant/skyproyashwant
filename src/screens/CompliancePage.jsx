import React from "react";
import ComplienceOnePage from "../components/complienePageComponents/ComplianceOnePage";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";

const CompliancePage = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Header />
      <ComplienceOnePage />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default CompliancePage;
