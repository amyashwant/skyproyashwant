import React from "react";
import { useState } from "react";
import logoimage from "../../../assets/images/home-01/logo/logo1.png"
import logoimage1 from "../../../assets/images/home-01/logo/logo2.png"
import logoimage2 from "../../../assets/images/home-01/logo/logo3.png"
// import bottomImg from "../../../assets/images/home-01/logo/Skypro_New_Logo.png";
// import logoimage from "../../../assets/images/home-01/logo/"

const Package = () => {
    const [viewChannel, setViewChannel] = useState(false)

    const handleClick = () => {
        setViewChannel(!viewChannel)
    }

  return (
    <>
      {/* <!--==================== Packages-section start ====================--> */}
      <div class="package-section-new">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="package-header">
                <h1> Make your own plans</h1>
              </div>
              <div class="package-tab-sec">
                <div class="container">
                  <h3>Choose your State</h3>
                  <ul
                    class="nav nav-tabs nav-fill mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link active"
                        id="ex2-tab-1"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-1"
                        role="tab"
                        aria-controls="ex2-tabs-1"
                        aria-selected="true"
                      >
                        ANDHRA PRADESH
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex2-tab-2"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-2"
                        role="tab"
                        aria-controls="ex2-tabs-2"
                        aria-selected="false"
                      >
                        RAJASTHAN
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex2-tab-3"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-3"
                        role="tab"
                        aria-controls="ex2-tabs-3"
                        aria-selected="false"
                      >
                        HARYANA
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex2-tab-4"
                        data-bs-toggle="tab"
                        href="#ex3-tabs-4"
                        role="tab"
                        aria-controls="ex3-tabs-4"
                        aria-selected="false"
                      >
                        KARNATAKA
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex4-tab-5"
                        data-bs-toggle="tab"
                        href="#ex4-tabs-5"
                        role="tab"
                        aria-controls="ex4-tabs-5"
                        aria-selected="false"
                      >
                        MAHARASHTRA
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex5-tab-6"
                        data-bs-toggle="tab"
                        href="#ex5-tabs-6"
                        role="tab"
                        aria-controls="ex5-tabs-6"
                        aria-selected="false"
                      >
                        MADHYA PRADESH
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex6-tab-7"
                        data-bs-toggle="tab"
                        href="#ex6-tabs-7"
                        role="tab"
                        aria-controls="ex6-tabs-7"
                        aria-selected="false"
                      >
                        PUNJABI
                      </a>{" "}
                    </li>
                    <li class="nav-item" role="presentation">
                      {" "}
                      <a
                        class="nav-link"
                        id="ex6-tab-8"
                        data-bs-toggle="tab"
                        href="#ex7-tabs-8"
                        role="tab"
                        aria-controls="ex7-tabs-8"
                        aria-selected="false"
                      >
                        DELHI
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="ex2-content">
                  <div
                    class="tab-pane fade show active"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                  >
                    <div class="tab-content" id="stateTabsContent">
                      <div
                        class="tab-pane fade show active"
                        id="content-AP"
                        role="tabpanel"
                        aria-labelledby="tab-AP"
                      >
                        {/* <!-- Content for ANDHRA PRADESH --> */}
                        <div class="container">
                          <div class="row style-div2">
                            <div class="col-sm-8">
                              <div class="tab-bg">
                                <div class="width-div w-50">
                                  <h4>HW AP SILVER BUDGET TELUGU</h4>{" "}
                                  <a onClick={handleClick} href="#">View channels</a>
                                </div>
                                <div class="channelImage w-50">
                                  <ul class="m-0 p-0">
                                    <li>
                                      <img
                                        src={logoimage}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <img src={logoimage1} alt="" />
                                    </li>
                                    <li>
                                      <img
                                        src={logoimage2}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <span>+272</span>
                                    </li>
                                  </ul>
                                </div>
                                { viewChannel ? <div className="channel-logos d-inline-block">Hello
                              </div>
                              : <div className="channel-logos d-none"></div>
                            }
                              </div>
                            </div>
                            <div class="col-sm-4 d-flix">
                              <div class="tab-price">
                                <div class="price-style">
                                  <h2>
                                    ₹ 150.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div class="selectbtn">
                                  {" "}
                                  <a class="btn-style" href="#">
                                    Add Pack
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row style-div2">
                            <div class="col-sm-8">
                              <div class="tab-bg">
                                <div class="width-div w-50">
                                  <h4>NORTH FTA</h4>{" "}
                                  <a href="#">View channels</a>
                                </div>
                                <div class="channelImage w-50">
                                  <ul class="m-0 p-0">
                                    <li>
                                      <img
                                        src={logoimage}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <img src="assets/images/b4u.png" alt="" />
                                    </li>
                                    <li>
                                      <img
                                        src={logoimage1}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <span>+72</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 d-flix">
                              <div class="tab-price">
                                <div class="price-style">
                                  <h2>
                                    ₹ 450.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div class="selectbtn">
                                  {" "}
                                  <a class="btn-style" href="#">
                                    Add Pack
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row style-div2">
                            <div class="col-sm-8">
                              <div class="tab-bg">
                                <div class="width-div w-50">
                                  <h4>SILVER BUDGET HINDI</h4>{" "}
                                  <a href="#">View channels</a>
                                </div>
                                <div class="channelImage w-50">
                                  <ul class="m-0 p-0">
                                    <li>
                                      <img
                                        src={logoimage}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <img src={logoimage1} alt="" />
                                    </li>
                                    <li>
                                      <img
                                        src={logoimage2}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <span>+372</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 d-flix">
                              <div class="tab-price">
                                <div class="price-style">
                                  <h2>
                                    ₹ 260.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div class="selectbtn">
                                  {" "}
                                  <a class="btn-style" href="#">
                                    Add Pack
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row style-div2">
                            <div class="col-sm-8">
                              <div class="tab-bg">
                                <div class="width-div w-50">
                                  <h4>HW NORTH ULTRA VALUE HD</h4>{" "}
                                  <a href="#">View channels</a>
                                </div>
                                <div class="channelImage w-50">
                                  <ul class="m-0 p-0">
                                    <li>
                                      <img
                                        src={logoimage}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <img src={logoimage1} alt="" />
                                    </li>
                                    <li>
                                      <img
                                        src={logoimage2}
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <span>+372</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 d-flix">
                              <div class="tab-price">
                                <div class="price-style">
                                  <h2>
                                    ₹ 460.00<span>/mo</span>
                                  </h2>
                                  <p>*Prices are excluding taxes</p>
                                </div>
                                <div class="selectbtn">
                                  {" "}
                                  <a class="btn-style" href="#">
                                    Add Pack
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Add content for other state tabs in a similar manner --> */}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex2-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4>SILVER BUDGET TELUGU</h4>{" "}
                              <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src={logoimage} alt="" />
                                </li>
                                <li>
                                  <img src={logoimage2} alt="" />
                                </li>
                                <li>
                                  <img
                                    src={logoimage1}
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 140.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex2-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-3"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4>HW NORTH BUDGET</h4>{" "}
                              <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src={logoimage} alt="" />
                                </li>
                                <li>
                                  <img src={logoimage1} alt="" />
                                </li>
                                <li>
                                  <img
                                    src={logoimage2}
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+72</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 150.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex3-tabs-4"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-4"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4>NORTH FTA</h4> <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src={logoimage} alt="" />
                                </li>
                                <li>
                                  <img src={logoimage1} alt="" />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/aljazeera.png"
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+72</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 150.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex4-tabs-5"
                    role="tabpanel"
                    aria-labelledby="ex4-tab-5"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4>SILVER BUDGET</h4>{" "}
                              <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src={logoimage} alt="" />
                                </li>
                                <li>
                                  <img src={logoimage1} alt="" />
                                </li>
                                <li>
                                  <img
                                    src={logoimage2}
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 170.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex5-tabs-6"
                    role="tabpanel"
                    aria-labelledby="ex5-tab-6"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4>SILVER BUDGET HINDI</h4>{" "}
                              <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src={logoimage} alt="" />
                                </li>
                                <li>
                                  <img src={logoimage1} alt="" />
                                </li>
                                <li>
                                  <img
                                    src={logoimage2}
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+372</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 160.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex6-tabs-7"
                    role="tabpanel"
                    aria-labelledby="ex6-tab-7"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4> BUDGET PUNJABI</h4>{" "}
                              <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src={logoimage} alt="" />
                                </li>
                                <li>
                                  <img src={logoimage1} alt="" />
                                </li>
                                <li>
                                  <img
                                    src={logoimage2}
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 140.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex7-tabs-8"
                    role="tabpanel"
                    aria-labelledby="ex7-tab-8"
                  >
                    <div class="container">
                      <div class="row style-div2">
                        <div class="col-sm-8">
                          <div class="tab-bg">
                            <div class="width-div w-50">
                              <h4>HW TL SUPER HD</h4>{" "}
                              <a href="#">View channels</a>
                            </div>
                            <div class="channelImage w-50">
                              <ul class="m-0 p-0">
                                <li>
                                  <img src="assets/images/dangal.png" alt="" />
                                </li>
                                <li>
                                  <img src="assets/images/b4u.png" alt="" />
                                </li>
                                <li>
                                  <img
                                    src="assets/images/aljazeera.png"
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <span>+272</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 d-flix">
                          <div class="tab-price">
                            <div class="price-style">
                              <h2>
                                ₹ 180.00<span>/mo</span>
                              </h2>
                              <p>*Prices are excluding taxes</p>
                            </div>
                            <div class="selectbtn">
                              {" "}
                              <a class="btn-style" href="#">
                                Add Pack
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;