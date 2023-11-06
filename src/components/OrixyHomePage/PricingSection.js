import React from "react";

const PricingSection = () => {
  return (
    <>
      {/* Start of PricingSection
	============================================= */}
      <section
        id="ori-pricing"
        className="ori-pricing-section position-relative"
      >
        <span className="ori-pricing-shape text-center position-absolute">
          <img src="assets/img/bg/price-bg.png" alt="" />
        </span>
        <div className="container">
          <div
            className="ori-section-title-4 text-center wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1000ms"
          >
            <h2>
              Suitable<span> pricing plan</span>
            </h2>
            <p>No contracts. No surprise fees.</p>
          </div>
          <div className="ori-pricing-content">
            <div className="ori-price-tab-btn">
              <ul className="nav nav-pills" id="pills-tab2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="month-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#month"
                    type="button"
                    role="tab"
                    aria-controls="month"
                    aria-selected="true"
                  >
                    Monthly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="year-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#year"
                    type="button"
                    role="tab"
                    aria-controls="year"
                    aria-selected="true"
                  >
                    Yearly
                  </button>
                </li>
              </ul>
            </div>
            <div className="ori-pricing-item-content">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane animated fadeInUp show active"
                  id="month"
                  role="tabpanel"
                >
                  <div className="ori-pricing-plan-item-area">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="ori-price-plan-item">
                          <div className="ori-plan-price">
                            <h3>
                              $20 <sub>/month</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Intro</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="ori-price-plan-item">
                          <div className="ori-plan-price">
                            <h3>
                              $50 <sub>/month</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Base</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div
                          className="ori-price-plan-item popular-item position-relative"
                          data-background="assets/img/bg/pr-bg.png"
                          style={{
                            backgroundImage: `url(https://i.ibb.co/7VMHP42/pr-bg.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <span className="tag-label text-uppercase position-absolute">
                            Most popular
                          </span>
                          <div className="ori-plan-price">
                            <h3>
                              $100 <sub>/month</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Pro</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="ori-price-plan-item">
                          <div className="ori-plan-price">
                            <h3>
                              $200 <sub>/month</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Enterprise</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane animated fadeInUp"
                  id="year"
                  role="tabpanel"
                >
                  <div className="ori-pricing-plan-item-area">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="ori-price-plan-item">
                          <div className="ori-plan-price">
                            <h3>
                              $20 <sub>/year</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Intro</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="ori-price-plan-item">
                          <div className="ori-plan-price">
                            <h3>
                              $50 <sub>/year</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Base</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div
                          className="ori-price-plan-item popular-item position-relative"
                          data-background="https://i.ibb.co/7VMHP42/pr-bg.png"
                          style={{
                            backgroundImage: `url(https://i.ibb.co/7VMHP42/pr-bg.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          
                          
                        >
                          <span className="tag-label text-uppercase position-absolute">
                            Most popular
                          </span>
                          <div className="ori-plan-price">
                            <h3>
                              $100 <sub>/year</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Pro</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="ori-price-plan-item">
                          <div className="ori-plan-price">
                            <h3>
                              $200 <sub>/year</sub>
                            </h3>
                          </div>
                          <div className="ori-price-plan-title pera-content">
                            <h3>Enterprise</h3>
                            <p>
                              For most businesses that want to otpimize web
                              queries
                            </p>
                          </div>
                          <div className="ori-price-feature ul-li-block">
                            <ul>
                              <li>All limited links</li>
                              <li>Own analytics platform</li>
                              <li>Chat support</li>
                              <li>Optimize hashtags</li>
                              <li>Unlimited users</li>
                            </ul>
                          </div>
                          <div className="ori-price-btn">
                            <a href="#">Choose plan</a>
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
      </section>
      {/* End of Pricing section
	============================================= */}
    </>
  );
};

export default PricingSection;
