import React from "react";

const Contact = () => {
  return (
    <section class="contact py-100">
      <div class="container">
        <div class="row gy-5">
          <div class="col-lg-6">
            <div class="row gy-4">
              <div class="col-sm-6">
                <div class="contact-address d-flex flex-row text-sm-start text-start">
                  <div class="icon">
                    <img
                      src="assets/images/contact/contact-icon-01.png"
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <h6 class="title">OFFICIAL LOCATION</h6>
                    <p class="text">85023 Proston Rd. Inglewood</p>
                    <p class="text">Maine 98380</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="contact-address d-flex flex-row text-sm-start text-start">
                  <div class="icon">
                    <img
                      src="assets/images/contact/contact-icon-02.png"
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <h6 class="title">SEND US A MESSAGE</h6>
                    <p class="text">
                      <a href="mailto:">info123@gmail.com</a>
                    </p>
                    <p class="text">
                      <a href="mailto:">text123@etob.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="contact-address d-flex flex-row text-sm-start text-start">
                  <div class="icon">
                    <img
                      src="assets/images/contact/contact-icon-03.png"
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <h6 class="title">OUR OFFICE TIME</h6>
                    <p class="text">Wednesday - Saturday</p>
                    <p class="text">6 am to 8 pm EST</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="contact-address d-flex flex-row text-sm-start text-start">
                  <div class="icon">
                    <img
                      src="assets/images/contact/contact-icon-04.png"
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <h6 class="title">GIVE US CALL</h6>
                    <p class="text">
                      <a href="tel:">+(82) 800-968-3440</a>
                    </p>
                    <p class="text">
                      <a href="tel:">+(93) 300-789-5678</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p class="contact-para pt-lg-4 pt-2">
              We are dedicated to serving customers. We achieve this not only
              through our extensive portfolio of internet.
            </p>
          </div>
          <div class="col-lg-6">
            <form action="#" autocomplete="off">
              <div class="row">
                <div class="col-md-6">
                  <div class="contact-form-field mb-4">
                    <input
                      type="text"
                      id="yourname"
                      class="form-control form--control style-two"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="contact-form-field mb-4">
                    <input
                      type="email"
                      id="yourEmail"
                      class="form-control form--control style-two"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="contact-form-field mb-4">
                    <input
                      type="text"
                      id="phone"
                      class="form-control form--control style-two"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="contact-form-field mb-4">
                    <input
                      type="text"
                      id="yoursubject"
                      class="form-control form--control style-two"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="contact-form-field mb-4">
                    <textarea
                      id="yourComment"
                      class="form-control form--control style-two"
                      placeholder="Message"
                      spellcheck="false"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12 mt-2">
                  <div class="contact-form-field">
                    <button type="submit" class="btn--base">
                      SEND MESSAGE{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
