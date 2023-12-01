import React from "react";

const AccountPage = () => {
  return (
    <section className="account py-100">
      <div className="container">
        <div className="row gy-5 flex-wrap-reverse">
          <div className="col-lg-7 ">
            <div className="account-left">
              <div className="account-thumbs">
                <span>
                  <img
                    className="w-100"
                    src="assets/images/account/account-02.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    className="w-100"
                    src="assets/images/account/account-01.png"
                    alt=""
                  />
                </span>
              </div>
              <strong></strong>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <div className="account-form">
              <div className="section-header style-two">
                <h4 className="subtitle">LOG IN</h4>
                <h2 className="title">WELCOME TO BACK</h2>
              </div>
              <form action="#" autoComplete="off">
                <div className="row gy-3">
                  <div className="col-md-12">
                    <div className="contact-form-field">
                      <label for="userName" className="form-label form--label">
                        User Name
                      </label>
                      <input
                        type="text"
                        id="userName"
                        className="form-control form--control"
                        placeholder="Enter Your Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="contact-form-field">
                      <label className="form--label" for="password">
                        {" "}
                        Password
                      </label>
                      <div className="input--group">
                        <input
                          id="password"
                          type="password"
                          className="form-control form--control"
                          value="password"
                        />
                        <span
                          id="#password"
                          className="fa fa-fw field-icon toggle-password fa-eye"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
                      <button type="submit" className="btn--base">
                        {" "}
                        SIGN UP YOUR ACCOUNT
                      </button>
                      <p className="text text-dark fw-normal mt-sm-0 mt-2">
                        {" "}
                        <a href="#" className="forgot">
                          Forgot Password?
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="remeber-me">
                      <input type="checkbox" id="rem-me" />
                      <label for="rem-me">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-form-field">
                      <p className="text text-dark fw-normal">
                        Don't Have An Account?{" "}
                        <a href="registration.html">Sign Up</a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
