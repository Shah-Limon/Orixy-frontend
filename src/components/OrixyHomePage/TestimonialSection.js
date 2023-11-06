import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://nft-seo-server.onrender.com/testimonials")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.error("Error fetching testmonials:", error);
      });
  }, []);

  return (
    <>
      {/* Start of TestimonialSection
	============================================= */}
      <section
        id="ori-testimonial-4"
        className="ori-testimonial-section-4 position-relative"
      >
        <div className="dot-line-shape position-absolute">
          <img
            src="https://html.themexriver.com/Orixy/assets/img/vector/banner-vector.png"
            alt=""
          />
        </div>
        <div className="ori-testimonial-circle-img position-absolute">
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc1.png"
              alt=""
            />
          </span>
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc2.png"
              alt=""
            />
          </span>
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc3.png"
              alt=""
            />
          </span>
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc4.png"
              alt=""
            />
          </span>
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc5.png"
              alt=""
            />
          </span>
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc6.png"
              alt=""
            />
          </span>
          <span className="ori-testi-circle-img">
            <img
              src="https://html.themexriver.com/Orixy/assets/img/testimonial/tc7.png"
              alt=""
            />
          </span>
        </div>
        <div className="container">
          <div className="ori-testimonial-content-1 position-relative">
            <div className="ori-vector-bg position-absolute">
              <img
                src="https://html.themexriver.com/Orixy/assets/img/vector/tst-vector1.png"
                alt=""
              />
            </div>
            <div className="ori-testimonial-title text-center text-uppercase">
              <h2>What our Client say</h2>
            </div>
            <div className="ori-testimonial-slider-1">
              <AliceCarousel
                mouseTracking
                autoPlay
                infinite
                autoPlayInterval={2000}
                animationDuration={2000}
                animationType="fadeout slide"
                
                items={testimonials.map((testimonial, index) => (
                  <div className="ori-testimonial-item-1" key={index}>
                    <div className="ori-testimonial-text text-center pera-content">
                      <p>{testimonial.desc}</p>
                      <div className="ori-testimonial-author text-center text-uppercase">
                        <h4>{testimonial.personName}</h4>
                        <span>{testimonial.personTitle}</span>
                      </div>
                      <div className="person-image-container">
                <img
                  className="person-image"
                  src={testimonial.personImg}
                  alt={testimonial.personName}
                />
              </div>

                    </div>
                  </div>
                ))}
              />
            </div>
          </div>
        </div>
      </section>
      {/* End of Testimonial section
	============================================= */}
    </>
  );
};

export default TestimonialSection;
