import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <header className="ori-header-section header-style-four">
      <div className="ori-header-content-area">
        <div className="ori-header-content d-flex align-items-center justify-content-between">
          <div className="brand-logo">
            <a href="#">
              <img src="assets/img/logo/logo3.png" alt="" />
            </a>
          </div>
          <div className="ori-main-navigation-area">
            <nav className="ori-main-navigation clearfix ul-li">
              <ul id="main-nav" className="nav navbar-nav clearfix">
                <li>
                  <a href="#ori-banner-4">Home</a>
                </li>
                <li>
                  <a href="#ori-feature-4">Feature</a>
                </li>
                <li>
                  <a href="#ori-project-4">Portfolio</a>
                </li>
                <li>
                  <a href="#ori-service-4">Service</a>
                </li>
                <li>
                  <a href="#ori-pricing">Pricing</a>
                </li>
                <li>
                  <a href="#ori-testimonial-4">Testimonial</a>
                </li>
                <li>
                  <a href="#ori-blog-4">Blogs</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ori-header-login-search-sidenav d-flex align-items-center">
            <div className="ori-header-login-search d-flex">
              <div className="ori-hd-login">
                <button>
                  <i className="fal fa-user" />
                </button>
              </div>
              <div className="ori-hd-search">
                <button className="search-box-outer">
                  <i className="far fa-search" />
                </button>
              </div>
            </div>
            <div className="ori-sidenav-btn navSidebar-button">
              <button onClick={toggleMobileMenu}>
                <i className="fal fa-bars" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`mobile_menu position-relative ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          <div
            className="mobile_menu_button open_mobile_menu"
            onClick={toggleMobileMenu}
          >
            <i className="fal fa-bars" />
          </div>
          <div className="mobile_menu_wrap">
            <div className="mobile_menu_overlay open_mobile_menu" />
            <div className="mobile_menu_content">
              <div
                className="mobile_menu_close open_mobile_menu"
                onClick={toggleMobileMenu}
              >
                <i className="fal fa-times" />
              </div>
              <div className="m-brand-logo">
                <a href="!#">
                  <img src="assets/img/logo/logo1.png" alt="" />
                </a>
              </div>
              <nav className="mobile-main-navigation  clearfix ul-li">
                <ul id="m-main-nav" className="nav navbar-nav clearfix">
                  <li>
                    <a href="#ori-banner-4">Home</a>
                  </li>
                  <li>
                    <a href="#ori-feature-4">Feature</a>
                  </li>
                  <li>
                    <a href="#ori-project-4">Portfolio</a>
                  </li>
                  <li>
                    <a href="#ori-service-4">Service</a>
                  </li>
                  <li>
                    <a href="#ori-pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#ori-testimonial-4">Testimonial</a>
                  </li>
                  <li>
                    <a href="#ori-blog-4">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
