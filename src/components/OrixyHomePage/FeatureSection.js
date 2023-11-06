import React from "react";

const FeatureSection = () => {
  return (
    <>
      {/* Start of Feature section
	============================================= */}
      <section
        id="ori-feature-4"
        className="ori-feature-section-4 position-relative"
        data-background="assets/img/bg/ft-bg.png"
        style={{
          backgroundImage: `url(https://i.ibb.co/NKtg1TF/ft-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
      >
        <div className="dot-line-shape position-absolute">
          <img src="assets/img/vector/banner-vector.png" alt="" />
        </div>
        <div className="container">
          <div className="ori-feature-content-4">
            <div className="row">
              <div className="col-lg-5">
                <div className="ori-feature-text-wrap-4">
                  <div
                    className="ori-section-title-4 wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1000ms"
                  >
                    <h2>
                      Boosts your website <span> traffic with us</span>
                    </h2>
                  </div>
                  <div
                    className="ori-feature-text-area-4 pera-content wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1000ms"
                  >
                    <p>
                      We are passionate about our work. Our designers stay ahead
                      of the curve to provide engaging and user-friendly website
                      designs to make your business stand out.
                    </p>
                    <p>
                      Our developers are committed to maintaining the highest
                      web standards so that your site will withstand the test of
                      time. We care about your business.
                    </p>
                    <div className="ori-btn-2 text-uppercase">
                      <a href="about.html">discover more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ori-feature-item-wrapper-4">
                  <div className="row">
                    <div
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="ori-feature-item-4 d-flex">
                        <div className="ori-feature-icon d-flex justify-content-center align-items-center">
                          <i className="fal fa-file-search" />
                        </div>
                        <div className="ori-feature-text pera-content">
                          <h3>
                            Discover, Explore <span> the Product</span>
                          </h3>
                          <p>
                            All our content marketing service packages include a
                            custom content strategy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="ori-feature-item-4 d-flex">
                        <div className="ori-feature-icon d-flex justify-content-center align-items-center">
                          <i className="far fa-asterisk" />
                        </div>
                        <div className="ori-feature-text pera-content">
                          <h3>
                            Art Direction &amp; <span> Brand Strategy </span>
                          </h3>
                          <p>
                            All our content marketing service packages include a
                            custom content strategy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="ori-feature-item-4 d-flex">
                        <div className="ori-feature-icon d-flex justify-content-center align-items-center">
                          <i className="fal fa-pencil-ruler" />
                        </div>
                        <div className="ori-feature-text pera-content">
                          <h3>
                            Product UX, Design <span> &amp; Development</span>
                          </h3>
                          <p>
                            All our content marketing service packages include a
                            custom content strategy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay="500ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="ori-feature-item-4 d-flex">
                        <div className="ori-feature-icon d-flex justify-content-center align-items-center">
                          <i className="fal fa-bullhorn" />
                        </div>
                        <div className="ori-feature-text pera-content">
                          <h3>
                            Marketing Strategy <span> &amp; SEO Campaigns</span>
                          </h3>
                          <p>
                            All our content marketing service packages include a
                            custom content strategy
                          </p>
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
      {/* End of Feature section
	============================================= */}
    </>
  );
};

export default FeatureSection;
