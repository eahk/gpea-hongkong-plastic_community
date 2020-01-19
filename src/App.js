import React, { useState, useEffect } from "react";
import mitt from "mitt";
import cx from "classnames";
import { motion, useViewportScroll } from "framer-motion";
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
let easing = [0.175, 0.85, 0.42, 0.96];
const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};
const formModalAnimation = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "50%" }
};
const showActionAnimation = {
  show: { y: 0 },
  hidden: { y: "100%" }
};
//
function App() {
  const { scrollYProgress } = useViewportScroll();
  const [lastYPos, setLastYPos] = useState(0);
  const [showAction, setShowAction] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      setLastYPos(yPos);
      if (window.scrollY > window.innerHeight) {
        setShowAction(true);
      } else {
        const isScrollingUp = yPos < lastYPos;
        setShowAction(isScrollingUp);
      }
    };
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
    //
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [lastYPos]);

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
                style={{ overflowX: "hidden" }}
              >
                <motion.div
                  animate={showFormModal || !isMobile ? "open" : "closed"}
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
        <motion.div
          className={cx("main-button", {
            "is-hidden": !isMobile && showFormModal
          })}
          animate={showAction ? "show" : "hidden"}
          variants={showActionAnimation}
        >
          <button
            className="button"
            onClick={() => {
              setShowFormModal(!showFormModal);
            }}
          >
            支持我們
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
