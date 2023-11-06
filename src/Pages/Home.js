import React from "react";
import Banner from "../components/OrixyHomePage/Banner";
import FeatureSection from "../components/OrixyHomePage/FeatureSection";
import ProjectSection from "../components/OrixyHomePage/ProjectSection";
import ServiceSection from "../components/OrixyHomePage/ServiceSection";
import PricingSection from "../components/OrixyHomePage/PricingSection";
import TestimonialSection from "../components/OrixyHomePage/TestimonialSection";
import Blog from "../components/OrixyHomePage/Blog";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <ProjectSection></ProjectSection>
      <ServiceSection></ServiceSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <Blog></Blog>
    </>
  );
};

export default Home;
