import React from "react";

const AboutPages = () => {
  return (
    <section class="about py-100">
      <div class="container">
        <div class="row gy-md-5 gy-4">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-sm-6">
                <div class="about-left-thumb">
                  <img
                    class="w-100"
                    src="assets/images/home-01/about/about-img-01.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="about-right-thumb">
                  <img
                    class="w-100"
                    src="assets/images/home-01/about/about-img-02.png"
                    alt=""
                  />
                  <img
                    class="w-100"
                    src="assets/images/home-01/about/about-img-03.png"
                    alt=""
                  />
                  <img
                    class="w-100"
                    src="assets/images/home-01/about/dot-shape.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-right-content ps-lg-5">
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-header style-two">
                    <h4 class="subtitle"> ABOUT US</h4>
                    <h2 class="title">DISCOVER A WINDER WORD OF RERATION</h2>
                  </div>
                </div>
              </div>
              <p class="para pb-4">
                {" "}
                Broadband Internet has progressed significantly since its
                foundation in 1997.
              </p>
              <p class="para">
                We have developed reliably and naturally as an interchange
                supplier serving an assorted arrangement of business class voice
                and information administrations
              </p>
              <div class="about-client">
                <div class="about-meta d-flex align-items-center flex-wrap">
                  <div class="meta-thumb">
                    <img
                      src="assets/images/home-01/about/testi-01.png"
                      alt=""
                    />
                  </div>
                  <div class="meta-content">
                    <h5 class="name">Wade warren</h5>
                    <span class="designation">CEO</span>
                  </div>
                </div>
                <div class="about-button">
                  <a href="about.html" class="btn--base">
                    DISCOVER MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPages;
