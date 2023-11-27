import React from "react";

const AccountPage = () => {
  return (
    <section class="account py-100">
      <div class="container">
        <div class="row gy-5 flex-wrap-reverse">
          <div class="col-lg-7 ">
            <div class="account-left">
              <div class="account-thumbs">
                <span>
                  <img
                    class="w-100"
                    src="assets/images/account/account-02.png"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    class="w-100"
                    src="assets/images/account/account-01.png"
                    alt=""
                  />
                </span>
              </div>
              <strong></strong>
            </div>
          </div>
          <div class="col-lg-5 ps-lg-5">
            <div class="account-form">
              <div class="section-header style-two">
                <h4 class="subtitle">LOG IN</h4>
                <h2 class="title">WELCOME TO BACK</h2>
              </div>
              <form action="#" autoComplete="off">
                <div class="row gy-3">
                  <div class="col-md-12">
                    <div class="contact-form-field">
                      <label for="userName" class="form-label form--label">
                        User Name
                      </label>
                      <input
                        type="text"
                        id="userName"
                        class="form-control form--control"
                        placeholder="Enter Your Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="contact-form-field">
                      <label class="form--label" for="password">
                        {" "}
                        Password
                      </label>
                      <div class="input--group">
                        <input
                          id="password"
                          type="password"
                          class="form-control form--control"
                          value="password"
                        />
                        <span
                          id="#password"
                          class="fa fa-fw field-icon toggle-password fa-eye"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="contact-form-field d-sm-flex flex-wrap justify-content-between align-items-center">
                      <button type="submit" class="btn--base">
                        {" "}
                        SIGN UP YOUR ACCOUNT
                      </button>
                      <p class="text text-dark fw-normal mt-sm-0 mt-2">
                        {" "}
                        <a href="#" class="forgot">
                          Forgot Password?
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="remeber-me">
                      <input type="checkbox" id="rem-me" />
                      <label for="rem-me">Remember Me</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="contact-form-field">
                      <p class="text text-dark fw-normal">
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
