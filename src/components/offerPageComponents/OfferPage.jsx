import React from "react";

const OfferPage = () => {
    
  return (
    <section
      class="breadcumb bg-img overlay-bg py-80"
      style="background-image: url(assets/images/breadcumb/breadcumb.png);"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="breadcumb-content">
              <h4 class="breadcumb-title text-center text-white">
                OUR SERVICES
              </h4>
              <ul class="breadcumb-list d-flex justify-content-center align-items-center">
                <li>
                  <a href="index.html">HOME</a>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>SERVICES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPage;
