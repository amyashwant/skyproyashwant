import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import AboutPages from "../components/aboutPageComponents/aboutPages/AboutPages";
import OfferPage from "../components/aboutPageComponents/offferPage/OfferPage";
import TeamPage from "../components/aboutPageComponents/teamPage/TeamPage";
import CounterPage from "../components/aboutPageComponents/counterPage/CounterPage";
import TestimonialPage from "../components/aboutPageComponents/testimonialPage/TestimonialPage";
import BrandPage from "../components/aboutPageComponents/brandPage.jsx/BrandPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";

const AboutPage = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <BeadCumb />
      <AboutPages />
      <OfferPage />
      <TeamPage />
      <CounterPage />
      <TestimonialPage />
      <BrandPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default AboutPage;
