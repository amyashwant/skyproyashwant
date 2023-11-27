import React from "react";

const Contact = () => {
  return (
    <section className="contact py-100">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img
                      src="assets/images/contact/contact-icon-01.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">OFFICIAL LOCATION</h6>
                    <p className="text">
                      SCO 37, Second floor, Sector 67 SAS Nagar - 160062(PUNJAB)
                    </p>
                    {/* <p className="text">Maine 98380</p>  */}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img
                      src="assets/images/contact/contact-icon-02.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">SEND US A MESSAGE</h6>
                    <p className="text">
                      <a href="mailto:">info123@gmail.com</a>
                    </p>
                    <p className="text">
                      <a href="mailto:">text123@etob.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img
                      src="assets/images/contact/contact-icon-03.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">OUR OFFICE TIME</h6>
                    <p className="text">Monday - Friday</p>
                    <p className="text">10 am to 6 pm</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact-address d-flex flex-row text-sm-start text-start">
                  <div className="icon">
                    <img
                      src="assets/images/contact/contact-icon-04.png"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">GIVE US CALL</h6>
                    <p className="text">
                      <a href="tel:">+(91) 9803596035</a>
                    </p>
                    <p className="text">
                      <a href="tel:">+(91) 9803596035</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="contact-para pt-lg-4 pt-2">
              We are dedicated to serving customers.Thank you for reaching out
              to Skypro. We appreciate your interest and are eager to assist
              you. Please choose from the options to get in touch with us.
            </p>
          </div>
          <div className="col-lg-6">
            <form action="#" autoComplete="off">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-form-field mb-4">
                    <input
                      type="text"
                      id="yourname"
                      className="form-control form--control style-two"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4">
                    <input
                      type="email"
                      id="yourEmail"
                      className="form-control form--control style-two"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4">
                    <input
                      type="text"
                      id="phone"
                      className="form-control form--control style-two"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4">
                    <input
                      type="text"
                      id="yoursubject"
                      className="form-control form--control style-two"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="contact-form-field mb-4">
                    <textarea
                      id="yourComment"
                      className="form-control form--control style-two"
                      placeholder="Message"
                      spellcheck="false"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <div className="contact-form-field">
                    <button type="submit" className="btn--base">
                      SEND MESSAGE
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
