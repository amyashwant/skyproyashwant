import React from "react";
import Header from "../common/header/Header";
import RefundPageOne from "../components/refundPageComponents/RefundPageOne";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";

const RefundPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <RefundPageOne />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default RefundPage;
