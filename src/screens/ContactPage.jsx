import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import Contact from "../components/contactPageComponents/contact/Contact";
import BeadCumb from "../components/contactPageComponents/beadCumb/BeadCumb";
import MapCompany from "../components/contactPageComponents/map/MapCompany";
import Footer from "../common/footer/Footer";

const ContactPage = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <BeadCumb/>
      <Contact />
      <MapCompany/>
      <Footer/>
    </>
  );
};

export default ContactPage;
