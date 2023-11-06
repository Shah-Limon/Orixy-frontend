import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showButton ? (
    <button className="scrollup" onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </button>
  ) : null;
};

export default BackToTopButton;
