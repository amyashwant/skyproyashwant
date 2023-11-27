import React from "react";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import ServicePages from "../components/servicePageComponents/servicePage/ServicePages";
import FaqPage from "../components/servicePageComponents/faqPage/FaqPage";
import CtaPage from "../components/servicePageComponents/ctaPage/CtaPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const ServicePage = () => {
  return (
    <>
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <BeadCumb />
      <ServicePages />
      <FaqPage />
      <CtaPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default ServicePage;
