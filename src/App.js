import React, { useState, useEffect } from "react";
// vendor
import "sanitize.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "swiper/css/swiper.css";
// custom
import "./styles/App.scss";
//
import Header from "./components/Header";
import EnForm from "./components/EnForm";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import PlasticCommunity from "./components/PlasticCommunity";
// import DollarHandle from "./components/DollarHandle";
// import BillBoard from "./components/BillBoard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
//
const stickyContainer = {
  position: "relative"
};
const sticky = {
  position: "sticky",
  top: "20px"
};
function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 576);
  const handleWindowResize = () => {
    if (isMobile && window.innerWidth > 576) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main-container">
          <div className="row">
            <aside
              className="main-right aside col-xs-12 col-lg-4 "
              style={stickyContainer}
            >
              <div style={sticky}>
                <EnForm />
              </div>
            </aside>
            <section className="main-left col-xs-12 col-lg-8 first-lg">
              <Hero />
              <Intro />
              <Timeline />

              {/*
              <DollarHandle />
              <BillBoard />
              */}
            </section>
          </div>
          <div className="row">
            <PlasticCommunity />
            <Testimonial />
          </div>
        </div>
        <div className="main-button">
          <button className="button">支持我們</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
