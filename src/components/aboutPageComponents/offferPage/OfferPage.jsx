import React from "react";
import offerOne from "../../../assets/images/home-01/about/offer-bg.png"
const OfferPage = () => {
  return (
    <section
      class="offer py-100 bg-img"
      //  style="background-image: url(assets/images/home-01/offer/offer-bg.png);"
      style={{
        backgroundImage: `url(${offerOne})`,
      }}
    >
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-header style-two">
                  <h4 class="subtitle">40% OFF FOR YOU</h4>
                  <h2 class="title">
                    SAVE MONEY BY BUNDLING YOUR INTERNET SERVICE
                  </h2>
                  <p class="para">
                    We are dedicated to serving customers. We achieve this not
                    only through our extensive portfolio of internet.
                  </p>
                </div>
              </div>

              <div
                id="offer-countdown"
                class="d-flex flex-wrap align-items-center gap-2"
              ></div>

              <div class="col-lg-12">
                <div class="offer-button-price">
                  <div class="offer-button flex-shrink-0">
                    <a href="about.html" class="btn--base">
                      DISCOVER MORE
                    </a>
                  </div>
                  <div class="offer-price flex-grow-1">
                    <h2 class="price">
                      $30.00<span class="month">/MONTH </span>{" "}
                      <span class="previous-price">$58.00</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPage;
