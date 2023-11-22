import React from "react";

const PricingPlan = () => {
  return (
    <section class="pricing py-100 bg-img">
      <div class="pricing-background-img">
        <img src="assets/images/home-01/pricing/pricing-bg.png" alt="" />
      </div>
      <div class="container">
        <div class="row justify-content-center g-4">
          <div class="col-xl-4 col-md-6">
            <div class="price-wrapper">
              <div class="pricing-item">
                <div class="background-img">
                  <img
                    src="assets/images/home-01/pricing/pricing-01.png"
                    alt=""
                  />
                </div>
                <h2 class="title">INTERNET + TV</h2>
                <p class="para">For 12 mos when bundled, + taxes & equip fee</p>
                <ul class="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span class="icon-monitor"></span>
                  </li>
                  <li>
                    <span class="icon-wifi-2"></span>
                  </li>
                </ul>
                <ul class="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div class="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 class="price">
                    $30.00 <span>/ Month</span>
                  </h2>
                  <div class="icon-plus">
                    <a href="packages.html">
                      <span class="icon-add-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="price-wrapper">
              <div class="pricing-item">
                <div class="background-img">
                  <img
                    src="assets/images/home-01/pricing/pricing-02.jpg"
                    alt=""
                  />
                </div>
                <h2 class="title">INTERNET + TV + PHONE</h2>
                <p class="para">For 12 mos when bundled, + taxes & equip fee</p>
                <ul class="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span class="icon-wifi-2"></span>
                  </li>
                  <li>
                    <span class="icon-antena"></span>
                  </li>
                  <li>
                    <span class="icon-monitor"></span>
                  </li>
                </ul>
                <ul class="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div class="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 class="price">
                    $59.00 <span>/ Month</span>
                  </h2>
                  <div class="icon-plus">
                    <a href="packages.html">
                      <span class="icon-add-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="price-wrapper">
              <div class="pricing-item">
                <div class="background-img">
                  <img
                    src="assets/images/home-01/pricing/pricing-03.jpg"
                    alt=""
                  />
                </div>
                <h2 class="title">INTERNET</h2>
                <p class="para">For 12 mos when bundled, + taxes & equip fee</p>
                <ul class="pricing-icons d-flex flex-wrap align-items-center justify-content-start">
                  <li>
                    <span class="icon-wifi-2"></span>
                  </li>
                </ul>
                <ul class="price-list">
                  <li>Home Broadband</li>
                  <li>Internet with a 1000 Mbps</li>
                  <li>99% Internet Uptime</li>
                  <li>Unlimited devices</li>
                </ul>
                <div class="price-amount-icon d-flex flex-wrap align-items-center justify-content-between">
                  <h2 class="price">
                    $30.00 <span>/ Month</span>
                  </h2>
                  <div class="icon-plus">
                    <a href="packages.html">
                      <span class="icon-add-1"></span>
                    </a>
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

export default PricingPlan;
