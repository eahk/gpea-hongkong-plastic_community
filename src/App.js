import React, { useState, useEffect } from "react";
import mitt from "mitt";
import cx from "classnames";
import { motion } from "framer-motion";
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
window.ee = new mitt();
//
const formModalAnimation = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" }
};
//
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1200) {
        setIsMobile(false);
        if (showFormModal) {
          setShowFormModal(false);
        }
      } else if (!isMobile && window.innerWidth < 1200) {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={cx("app", { "modal-open": showFormModal })}>
      <Header />
      <main className="main">
        <div className="main-container">
          <div className="row">
            <aside
              className={cx(
                "main-right",
                "aside",
                "col-xs-12",
                "col-lg-4",
                {
                  "is-hidden": isMobile
                },
                {
                  showFormModal: showFormModal
                }
              )}
            >
              <div
                className={cx("enForm-wrapper", {
                  "is-sticky": !showFormModal
                })}
              >
                <motion.div
                  animate={showFormModal ? "open" : "closed"}
                  variants={formModalAnimation}
                >
                  <div className="enForm-header">
                    {showFormModal && (
                      <i
                        onClick={() => {
                          setShowFormModal(false);
                        }}
                        className="return-arrow fa fa-arrow-left"
                      ></i>
                    )}
                  </div>
                  <EnForm />
                </motion.div>
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
        <div
          className={cx("main-button", {
            "is-hidden": !isMobile || showFormModal
          })}
        >
          <button
            className="button"
            onClick={() => {
              setShowFormModal(!showFormModal);
            }}
          >
            支持我們
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
