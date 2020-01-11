import React from "react";
// vendor
import "sanitize.css";
import "bulma/css/bulma.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "swiper/css/swiper.css";
// custom
import "./App.scss";
//
import Header from "./components/Header";
import EnForm from "./components/EnForm";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import DollarHandle from "./components/DollarHandle";
// import PlasticCommunity from './components/PlasticCommunity'
// import BillBoard from './components/BillBoard'
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
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
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
              <DollarHandle />
            </section>
          </div>
          <div className="row">
            <div className="col-xs-12">
              {/*
			<PlasticCommunity />
			<BillBoard />
			*/}
              <Testimonial />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
