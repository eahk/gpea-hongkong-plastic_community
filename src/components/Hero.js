import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  height: 56.25vw;
  padding: 0;
  @media (max-width: 767px) {
    height: 100vw;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.5;
    background-color: #074365;
  }
`;

const Hero = ({ bgImage, title, description }) => (
  <HeroSection bgImage={bgImage}>
    <div className="hero-body ">
      <div className="container">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  </HeroSection>
);

export default Hero;
