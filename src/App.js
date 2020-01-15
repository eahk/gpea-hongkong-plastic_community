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
import DollarHandle from "./components/DollarHandle";
import PlasticCommunity from "./components/PlasticCommunity";
// import BillBoard from "./components/BillBoard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
//
const stickyContainer = {
  position: "relative",
  height: "100%"
};
const sticky = {
  position: "sticky",
  top: "20px"
};
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  useEffect(() => {
    const handleWindowResize = () => {
      if (isMobile && window.innerWidth > 576) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isMobile]);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main-container">
          <div className="row">
            <section className="main-right col-xs-12 col-lg-4 ">
              <aside className="aside" style={stickyContainer}>
                <div style={sticky}>
                  <EnForm />
                </div>
              </aside>
            </section>
            <section className="main-left col-xs-12 col-lg-8 first-lg">
              <Hero />
              <Intro />
              <Timeline />
              <DollarHandle />
              <PlasticCommunity />
              {/*
              <BillBoard />
              */}
              <Testimonial />
            </section>
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
