import React from "react";

const AccountPage = () => {
  return (
    <section className="account py-100">
      <div className="container">
        <div className="row gy-5 flex-wrap-reverse">
          <div className="col-xl-7 col-lg-6 ">
            <div
              className="fun-right-bg-img bg-img"
            //   style="background-image: url(assets/images/home-02/fun/fun-bg.png);"
            >
              <img src="assets/images/home-02/fun/fun-img.png" alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ps-xl-5">
            <div className="account-form">
              <div className="section-header style-two">
                <h4 className="subtitle">SIGN Up</h4>
                <h2 className="title">CREATE AN ACCOUNT</h2>
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
                  <div className="col-md-12">
                    <div className="contact-form-field">
                      <label for="Emailaddress" className="form-label form--label">
                        {" "}
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="Emailaddress"
                        className="form-control form--control"
                        placeholder="Enter Your Email"
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
                  <div className="col-sm-12">
                    <div className="contact-form-field">
                      <label className="form--label" for="re-password">
                        {" "}
                        Re Password
                      </label>
                      <div className="input--group">
                        <input
                          id="re-password"
                          type="password"
                          className="form-control form--control"
                          value="re-password"
                        />
                        <span
                          id="#re-password"
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
                        Already Have An Account? <a href="login.html">Log in</a>
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
