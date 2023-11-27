import React from "react";
import teamOne from "../../../assets/images/home-01/about/team-bg.png";
import teamTwo from "../../../assets/images/home-01/about/team-01.png";
import teamThree from "../../../assets/images/home-01/about/team-02.png";
import teamFour from "../../../assets/images/home-01/about/team-03.png";

const TeamPage = () => {
  return (
    <section
      class="team bg-img overlay-bg pt-100 pb-50"
      //  style="background-image: url(assets/images/about/team/team-bg.png);"
      style={{
        backgroundImage: `url(${teamOne})`,
      }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-header">
              <h4 class="subtitle">OUR TEAM</h4>
              <h2 class="title text-white">MEET OUR EXPERTS TEAM</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center g-4">
          <div class="col-lg-4 col-md-6">
            <div class="team-item">
              <div class="thumb">
                <img src={teamTwo} alt="" />
                <div class="share-icon">
                  <a href="javascript: void(0)" class="icon-share"></a>
                  <div class="popup-share-icons">
                    <ul class="popup-icons d-flex">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="content">
                <h4 class="name">
                  <a href="team-details.html">DARLENE ROBERTSON</a>
                </h4>
                <span class="designation">Ceo</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item">
              <div class="thumb">
                <img src={teamThree} alt="" />
                <div class="share-icon">
                  <a href="javascript: void(0)" class="icon-share"></a>
                  <div class="popup-share-icons">
                    <ul class="popup-icons d-flex">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="content">
                <h4 class="name">
                  <a href="team-details.html">AHMADULLAH</a>
                </h4>
                <span class="designation">Founder</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item">
              <div class="thumb">
                <img src={teamFour} alt="" />
                <div class="share-icon">
                  <a href="javascript: void(0)" class="icon-share"></a>
                  <div class="popup-share-icons">
                    <ul class="popup-icons d-flex">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="content">
                <h4 class="name">
                  <a href="team-details.html">CHARLES BRADFORD</a>
                </h4>
                <span class="designation">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
