import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
//
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import Hero from "./components/Hero.js";
import SimpleSwiper from "./components/SimpleSwiper.js";
//
import "./styles/main.scss";
//
function MyApp() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <Form />
        <Hero
          title="Season 66 will be available soon!"
          description="Lorem ipsum dolor sit amet hey!"
        />
        <SideBySide>
          <Side>1</Side>
          <Side>2</Side>
        </SideBySide>
        <SimpleSwiper />
      </MainWrapper>
    </React.Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const MainWrapper = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const SideBySide = styled.div`
  display: flex;
`;

const Side = styled.div`
  flex: 1;
  text-align: center;
`;

export default MyApp;

/*
<Header/>
<Form/>
<Banner/>
- Carousel Swiper
<Intro/>
- Side By Side
<PlasticCommunity/>
- Map
- Districts UpVote
<BillBoard/>
- Swiper
<Testimonial/>
<Footer/>
*/
