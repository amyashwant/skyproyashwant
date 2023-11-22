import React from "react";

const CtaPage = () => {
  return (
    <section
      class="cta py-100 overlay-bg bg-img"
    //   style="background-image: url(assets/images/services/cta.png);"
    >
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-6">
            <div class="cta-content">
              <h3 class="title text-white mb-xl-4 mb-3">
                SAVE MONEY BY BUNDLING YOUR INTERNET SERVICE
              </h3>
              <a href="contact.html" class="btn--base style-two">
                CONTACT US $20 <i class="icon-check-mark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaPage;
