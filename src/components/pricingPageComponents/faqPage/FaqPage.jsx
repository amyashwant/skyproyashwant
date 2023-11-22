import React from "react";

const FaqPage = () => {
  return (
    <section
      class="faq py-100 bg-img overlay-bg"
    //   style="background-image: url(assets/images/home-01/offer/offer-bg.png);"
    >
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-header style-two">
                  <h4 class="subtitle"> FAQ </h4>
                  <h2 class="title">A FREQUENTLY ASKED QUESTIONS</h2>
                </div>
              </div>
            </div>
            <div class="accordion custom--accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What does 1 gigabit per second Internet mean?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      The association speed accessible at the gadget we
                      introduce on your premises is fit for sending
                      1,000,000,000 pieces of data consistently. Comprehend that
                      your real throughput speed relies upon many variables.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Will I be able to use Wi-Fi with Point Gigabit?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Indeed. The hardware we will give is intended to give you
                      Internet access through the wired association. You may
                      likewise associate a remote switch to the gadget that
                      Point Broadband gives.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I use my own wireless router?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Indeed. We suggest a 802.11ac or AX (Wi-Fi6)
                      switch/passageway with the ability to help various streams
                      to get the best remote experience. If it's not too much
                      trouble, note that remote paces are reliant upon the
                      gadget abilities.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What types of cables will be used for Point Broadband?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      CAT5e and Cat6 Ethernet links best help Point Broadband
                      Gigabit speeds.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What's so special about fiber Internet?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Fiber Internet is the latest improvement to the way data
                      is transferred around the world. It’s significantly faster
                      than cable, way faster than dial-up, and can carry large
                      amounts of data in a single line, even reaching multiple
                      terabytes of data transfer with ease.
                    </p>
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

export default FaqPage;
