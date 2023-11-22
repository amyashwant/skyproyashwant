import React from "react";

const CounterPage = () => {
  return (
    <section
      class="counterup bg-img pb-100 pt-50"
    //   style="background-image: url(assets/images/about/counter/counter-bg.png);"
    >
      <div class="container">
        <div class="row justify-content-center gy-md-5 gy-4">
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="counterup-item d-flex align-items-center">
              <div class="icon">
                <span class="icon-wifi-2"></span>
              </div>
              <div class="content">
                <div class="number">
                  <h2 class="title">
                    <span class="odometer" data-odometer-final="252">
                      0
                    </span>
                    K
                  </h2>
                </div>
                <h6 class="text">CONNECTION PROVIDED</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="counterup-item d-flex align-items-center">
              <div class="icon">
                <span class="icon-user-1"></span>
              </div>
              <div class="content">
                <div class="number">
                  <h2 class="title">
                    <span class="odometer" data-odometer-final="35">
                      0
                    </span>
                    M
                  </h2>
                </div>
                <h6 class="text">CLIENT IN THE WOLRD</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="counterup-item d-flex align-items-center">
              <div class="icon">
                <span class="icon-satellite-dish"></span>
              </div>
              <div class="content">
                <div class="number">
                  <h2 class="title">
                    <span class="odometer" data-odometer-final="460">
                      0
                    </span>
                    K
                  </h2>
                </div>
                <h6 class="text">SATTELLITE CHANNELE</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="counterup-item d-flex align-items-center">
              <div class="icon">
                <span class="icon-wifi-2"></span>
              </div>
              <div class="content">
                <div class="number">
                  <h2 class="title">
                    <span class="odometer" data-odometer-final="252">
                      0
                    </span>
                    K
                  </h2>
                </div>
                <h6 class="text">CONNECTION PROVIDED</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterPage;
