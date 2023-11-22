import React, { useState } from "react";

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
            <Link className="navbar-brand logo" to="/packages">
              <img src={headerLogo} alt="img" />
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

            <div className="toggle-search-box">
              <div className="search-icon">
                <span
                  // onClick={handleClick}
                  className="icon-search"
                ></span>
              </div>
              {/* {show === true && ( */}
              <div
                className="search-input"
                // style={{ visibility:"visible",display:"block" }}
              >
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              {/* )} */}
            </div>

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
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    HOME <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="index.html">
                        HOME 01
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-two.html">
                        HOME 02
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PAGES <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
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
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    SERVICES <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
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
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    BLOG <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="blog.html">
                        BLOG POST
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-details.html">
                        BLOG DETAILS
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    CONTACT US
                  </a>
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
