import React, { useState } from "react";
import bottomImg from "../../assets/images/home-01/logo/Skypro_New_Logo.png";
import headerLogo from "../../assets/images/home-01/logo/logo.png";
import { Link } from "react-router-dom";
import ToggleHeader from "./ToggleHeader";
const Header = () => {
  // const [show, setShow] = useState(false);
  // const handleClick = () => {
  //   setShow((s) => !s);
  // };

  return (
    <>
      <header className="header-bottom home-two-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand logo" to="/">
              <img src={bottomImg} alt="img" />
            </Link>
            <button
              className="navbar-toggler header-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            {/* <div className="toggle-search-box">
              <div className="search-icon">
                <span
            
                  className="icon-search"
                ></span>
              </div>
          
              <div
                className="search-input"
               
              >
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            
            </div> */}

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-menu ms-auto">
                <li className="nav-item d-block d-lg-none">
                  <ul className="login-registration d-flex flex-wrap align-items-center justify-content-start">
                    <li>
                      <a href="login.html">
                        <span className="icon-user-1"></span> Login
                      </a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="registration.html">Registration</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    HOME
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/about"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ABOUT
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="about.html">
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="team.html">
                        TEAM
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="team-details.html">
                        TEAM DETAILS
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="packages.html">
                        PACKAGES
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="404.html">
                        404
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/service"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="services.html">
                        SERVICES
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="services-details.html">
                        SERVICES DETAILS
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/packages"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PACKAGES
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/packages">
                        IPTV
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/packages">
                        Cable Tv
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
