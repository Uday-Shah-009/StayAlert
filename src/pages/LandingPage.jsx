import React from "react";
import Header from "../components/Header";
import HowItWorks from "../components/HeroSection";

const LandingPage = ({setWork}) => {
  return (
    <>
      <Header setWork={setWork}/>
      <HowItWorks />
    </>
  );
};

export default LandingPage;
