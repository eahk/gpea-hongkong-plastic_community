import React, { useState, useEffect } from "react";
import mitt from "mitt";
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

window.ee = new mitt();

//
const stickyContainer = {
  position: "relative"
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
            <aside
              className="main-right aside col-xs-12 col-lg-4 "
              style={stickyContainer}
            >
              <div style={sticky}>
                <h2 className="title">環保成就全因有您</h2>
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
            <div className="col-xs-12">
              <PlasticCommunity />
            </div>
            <div className="col-xs-12">
              <Testimonial />
            </div>
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
