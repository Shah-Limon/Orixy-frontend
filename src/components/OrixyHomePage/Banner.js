import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Banner = () => {
  const [logoImages, setLogoImages] = useState([]);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  useEffect(() => {
    // Fetch data from your API
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setLogoImages(data);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  }, []);

  const items = logoImages.map((image) => (
    <div className="ori-sponsor-item" key={image.id}>
      <div className="ori-sponsor-img">
        <img src={image.url} alt="" />
      </div>
    </div>
  ));
  return (
    <>
      {/* Start of banner section
	============================================= */}
      <section
        id="ori-banner-4"
        className="ori-banner-section-4 position-relative"
        style={{
          backgroundImage: `url(https://i.ibb.co/SBH8fTs/banner-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="line-shape position-absolute">
          <img
            src="https://html.themexriver.com/Orixy/assets/img/vector/banner-vector.png"
            alt=""
          />
        </span>
        <div className="ori-banner-content-4 position-relative">
          <span className="banner-social position-absolute">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/logo/bs1.png"
              alt=""
            />
          </span>
          <span className="banner-social position-absolute">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/logo/bs2.png"
              alt=""
            />
          </span>
          <span className="banner-social position-absolute">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/logo/bs3.png"
              alt=""
            />
          </span>
          <span className="banner-social position-absolute">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/logo/bs4.png"
              alt=""
            />
          </span>
          <span className="banner-social position-absolute">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/logo/bs5.png"
              alt=""
            />
          </span>
          <span className="banner-social position-absolute">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/logo/bs6.png"
              alt=""
            />
          </span>
          <div className="ori-banner-text-area pera-content text-center">
            <h1
              className="wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              Reach &amp; connect with your <span> target customers</span>
            </h1>
            <p
              className="wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1000ms"
            >
              Ensuring the best return on investment for your bespoke SEO
              campaign requirement.
            </p>
            <div
              className="ori-banner-form-4 position-relative wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1000ms"
            >
              <form action="#" method="get">
                <input
                  type="text"
                  name="link"
                  placeholder="Your Current Site Link"
                />
                <button type="submit">analysis your site</button>
              </form>
            </div>
          </div>
        </div>
        <div className="ori-banner-sponsor-section-4">
          <div className="container">
            <div className="ori-banner-sponsor-content-4 text-center pera-content">
              <p>We are Already Build Solution for...</p>
              <AliceCarousel
                autoPlay
                infinite
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                items={items}
                paddingLeft={50}
                paddingRight={50}
                responsive={responsive}
                disableButtonsControls
                
              />
            </div>
          </div>
        </div>
      </section>
      {/* End of banner section
	============================================= */}
    </>
  );
};

export default Banner;
