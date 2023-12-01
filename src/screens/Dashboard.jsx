import React from "react";
import Header from "../common/header/Header";
import Banner from "../components/homePageComponents/banner/Banner";
import Brand from "../components/homePageComponents/brand/Brand";
import About from "../components/homePageComponents/about/About";
import Service from "../components/homePageComponents/service/Service";
import Facts from "../components/homePageComponents/facts/Facts";
import Testimonials from "../components/homePageComponents/testimmonials/Testimonials";
import PricingPlans from "../components/homePageComponents/pricingPlan/PricingPlans";
import FootPrints from "../components/homePageComponents/footPrints/FootPrints";
import Blogs from "../components/homePageComponents/blogs/Blogs";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import ToggleBar from "../components/packagesComponents/toggleBar/ToggleBar";

const Dashboard = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      {/* <ToggleBar/> */}
      <Banner />
      <Brand />
      <About />
      <Service />
      <Facts />
      <Testimonials />
      <PricingPlans />
      <FootPrints />
      <Blogs />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default Dashboard;
