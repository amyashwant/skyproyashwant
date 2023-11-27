import React from "react";
import { Link } from "react-router-dom";
import contactImg from "../../../assets/images/breadcumb/_1530667899_390_yEZPsIaoTI3ZNDdB-croppedUundb-jpg-details.jpg";
const BeadCumb = () => {
  return (
    <section
      class="breadcumb bg-img overlay-bg py-80"
      //   style="background-image: url(assets/images/breadcumb/breadcumb.png);"
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="breadcumb-content">
              <h4 class="breadcumb-title text-center text-white">CONTACT US</h4>
              <ul class="breadcumb-list d-flex justify-content-center align-items-center">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeadCumb;
