import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="ori-footer" className="ori-footer-section footer-style-four">
  <div className="container">
    <div className="ori-footer-title text-center text-uppercase">
      <h2>
        Get In <span>Touch</span> <i className="fas fa-arrow-right" />
      </h2>
    </div>
    <div className="ori-footer-widget-wrapper">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="ori-footer-widget">
            <div className="logo-widget">
              <a href="#">
                <img src="assets/img/logo/logo1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="ori-footer-widget">
            <div className="menu-location-widget ul-li-block">
              <h2 className="widget-title text-uppercase">Our Location</h2>
              <ul>
                <li>
                  <a href="#">London</a>
                </li>
                <li>
                  <a href="#">America</a>
                </li>
                <li>
                  <a href="#">Constarica</a>
                </li>
                <li>
                  <a href="#">Germany</a>
                </li>
                <li>
                  <a href="#">India</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="ori-footer-widget">
            <div className="contact-widget ul-li-block">
              <h2 className="widget-title text-uppercase">Contact info</h2>
              <div className="contact-info">
                <span>ECA-135/A, 25/2 Barlin, Germany </span>
                <span>(+250)155 69569 365</span>
                <a href="#">support@orixy.com</a>
                <span>Office Hours: 8AM - 11PM</span>
                <span>Sunday - Wekend Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="ori-footer-widget">
            <div className="newslatter-widget ul-li-block">
              <h2 className="widget-title text-uppercase">Newslatter</h2>
              <div className="newslatter-form">
                <form action="#" method="get">
                  <input type="email" name="email" placeholder="Enter mail" />
                  <button type="submit">
                    Subscribe <i className="fas fa-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ori-footer-copyright d-flex justify-content-between">
      <div className="ori-copyright-text">
        © 2022 All Right Recived - Orixy - Themexriver
      </div>
      <div className="ori-copyright-social">
        <a href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
        <a href="#">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Footer;