/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import Helmet from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Hero from "./components/Hero";
import SimpleSwiper from "./components/SimpleSwiper";
// Styles
import "./App.css";
import "./styles/main.scss";
//
function MyApp() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="Title Template" defaultTitle="Default Title">
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-7">content</div>
            <div className="column is-5">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Hero
        bgImage="https://change.greenpeace.org.hk/general/annual/2018/static/images/gp/cover1.jpg"
        title="Season 66 will be available soon!"
        description="Lorem ipsum dolor sit amet hey!"
      />
      <SimpleSwiper />
      <GlobalStyle />
    </AppWrapper>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

/*
const Wrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  padding: 0 16px;
`;
*/

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
