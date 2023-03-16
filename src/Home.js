import React from "react";
import styled from "styled-components";
import FeatureProduct from "./Components/FeatureProduct";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";


function Home() {
  return (
    <>
      <HeroSection
        intro="Welcome to"
        heading="Subhan Store"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        button="Show Now"
      />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
}

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100vh;
`;

export default Home;
