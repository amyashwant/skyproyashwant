import React from "react";

const AccountPage = () => {
  return (
    <section class="account py-100">
      <div class="container">
        <div class="row gy-5 flex-wrap-reverse">
          <div class="col-xl-7 col-lg-6 ">
            <div
              class="fun-right-bg-img bg-img"
            //   style="background-image: url(assets/images/home-02/fun/fun-bg.png);"
            >
              <img src="assets/images/home-02/fun/fun-img.png" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 ps-xl-5">
            <div class="account-form">
              <div class="section-header style-two">
                <h4 class="subtitle">SIGN Up</h4>
                <h2 class="title">CREATE AN ACCOUNT</h2>
              </div>
              <form action="#" autocomplete="off">
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
                  <div class="col-md-12">
                    <div class="contact-form-field">
                      <label for="Emailaddress" class="form-label form--label">
                        {" "}
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="Emailaddress"
                        class="form-control form--control"
                        placeholder="Enter Your Email"
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
                  <div class="col-sm-12">
                    <div class="contact-form-field">
                      <label class="form--label" for="re-password">
                        {" "}
                        Re Password
                      </label>
                      <div class="input--group">
                        <input
                          id="re-password"
                          type="password"
                          class="form-control form--control"
                          value="re-password"
                        />
                        <span
                          id="#re-password"
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
