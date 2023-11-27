import React from "react";
import testiOne from "../../../assets/images/home-01/about/testimonial-01.png"
import testiTwo from "../../../assets/images/home-01/about/testimonial-01.png"
import testiThree from "../../../assets/images/home-01/about/testimonial-01.png"
const TestimonialPage = () => {
  return (
    <section class="testimonial style-two py-100 pb-50">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-header">
              <h4 class="subtitle">TESTIMONIAL</h4>
              <h2 class="title text-dark">WHAT OUR CLIENT SAY ABOUT US</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center g-4">
          <div class="col-lg-4 col-md-6">
            <div class="testimonail-wrapper">
              <div class="testimonial-item">
                <div class="thumb">
                  <img
                    src={testiOne}
                    alt=""
                  />
                </div>
                <div
                  class="background-img"
                  //  style="background-image: url(assets/images/home-01/testimonial/testi-shape.png);"
                  style={{
                    backgroundImage: `url(${testiOne})`,
                  }}
                ></div>
                <div class="content">
                  <div class="icon">
                    <i class="icon-quote"></i>
                  </div>
                  <p class="para">
                    Broadband internet is Rocket supplier. Their staff is
                    proficient and truly available. They deal with us and cause
                    us to feel they esteem our business."
                  </p>
                  <ul class="rating-star d-flex flex-wrap align-items-center justify-content-start ">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="far fa-star"></i>
                    </li>
                    <li>
                      {" "}
                      <span>4.0</span>{" "}
                    </li>
                  </ul>
                  <div class="client-name">
                    <h6 class="name">BROOKLYN SIMMONS</h6>
                    <span>Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="testimonail-wrapper">
              <div class="testimonial-item">
                <div class="thumb">
                  <img
                    src={testiTwo}
                    alt=""
                  />
                </div>
                <div
                  class="background-img"
                  //  style="background-image: url(assets/images/home-01/testimonial/testi-shape.png);"
                ></div>
                <div class="content">
                  <div class="icon">
                    <i class="icon-quote"></i>
                  </div>
                  <p class="para">
                    This is internet is “Our sales rep has been very helpful and
                    has gone out of his way to make our transition to Broadband
                    a painless process.”
                  </p>
                  <ul class="rating-star d-flex flex-wrap align-items-center justify-content-start ">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      {" "}
                      <span>5.0</span>{" "}
                    </li>
                  </ul>
                  <div class="client-name">
                    <h6 class="name">DARLENE DOBERTSON</h6>
                    <span>Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="testimonail-wrapper">
              <div class="testimonial-item">
                <div class="thumb">
                  <img
                    src={testiThree}
                    alt=""
                  />
                </div>
                <div
                  class="background-img"
                  // style="background-image: url(assets/images/home-01/testimonial/testi-shape.png);"
                ></div>
                <div class="content">
                  <div class="icon">
                    <i class="icon-quote"></i>
                  </div>
                  <p class="para">
                    I am pleased to recommend the internet service provided by
                    Broadband. The speed and service is excellent and they best
                    in market at this moment.
                  </p>
                  <ul class="rating-star d-flex flex-wrap align-items-center justify-content-start ">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="far fa-star"></i>
                    </li>
                    <li>
                      {" "}
                      <span>4.0</span>{" "}
                    </li>
                  </ul>
                  <div class="client-name">
                    <h6 class="name">CONRTNEY HENRY</h6>
                    <span>Client</span>
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

export default TestimonialPage;
