import React from "react";

const CtaPage = () => {
  return (
    <section
      class="package-features cta py-100 overlay-bg bg-img"
    //   style="background-image: url(assets/images/services/cta.png);"
    >
      <div class="container">
        <div class="row justify-content-center g-4 text-center">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="package-features-item">
              <div class="icon">
                <span class="icon-medal"></span>
              </div>
              <h5 class="title">Award Winning Services</h5>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="package-features-item">
              <div class="icon">
                <span class="icon-cloud-computing"></span>
              </div>
              <h5 class="title">get Unlimited Downloads</h5>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="package-features-item">
              <div class="icon">
                <span class="icon-road"></span>
              </div>
              <h5 class="title">Flexible Contract Lengths</h5>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="package-features-item">
              <div class="icon">
                <span class="icon-chat-1"></span>
              </div>
              <h5 class="title">Professional Support</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaPage;
