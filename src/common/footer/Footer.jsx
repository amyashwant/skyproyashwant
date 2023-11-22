import React from "react";
import footerOne from "../../assets/images/home-01/logo/footer-logo.png";
const Footer = () => {
  return (
    <>
      <footer
        className="footer-area bg-img"
        //   style="background-image: url(assets/images/home-01/footer/footer-bg.png);"
      >
        <div className="container py-100">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-item">
                <a href="index.html">
                  <img src={footerOne} alt="img" />
                </a>
                <p className="content">
                  Get a dedicated server hosted on your end to complete your
                  daily needs with efficient network routing and configuration.
                </p>
                <ul className="social-icons d-flex align-items-center flex-wrap pt-4">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-item">
                <h4 className="common-footer">QUICK LINKS</h4>
                <ul className="footer-menu">
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="registration.html">Appointment</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="packages.html">Our Plans</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="contact.html"> Contact </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-item">
                <h4 className="common-footer">USEFUL LINKS</h4>
                <ul className="footer-menu">
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="home-two.html">Home Two</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="blog.html">Blog Post</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="blog-details.html">Blog Details </a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <i className="fas fa-square-full"></i>
                    <a href="team-details.html">Team Details</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-item">
                <h4 className="common-footer">NEWS LETTER</h4>
                <div className="footer-buttons pt-3">
                  <form action="#" autocomplete="off">
                    <input
                      type="email"
                      className="form-control form--control text-center"
                      placeholder="Enter Your Email"
                      required
                    />
                    <button type="submit" className="btn--base w-100 mt-3">
                      SUBSCRIBE NOW!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <p className="bottom-footer-text text-white">
                  Copyright &copy; 2022. All Rights Reserved By Viserfix
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a className="scroll-top">
        <i className="fas fa-angle-double-up"></i>
      </a>
    </>
  );
};

export default Footer;
