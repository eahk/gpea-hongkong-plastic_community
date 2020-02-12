import React, { useState, useEffect, useRef } from "react";
import mitt from "mitt";
import cx from "classnames";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
// css
import "sanitize.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "swiper/css/swiper.css";
import "./styles/App.scss";
// components
import gpLogo from "./assets/images/GP-logo-2019-TC-green-[web]-01.png";
import ExternalLink from "./components/ExternalLink";
import Header from "./components/Header";
import EnForm from "./components/EnForm";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import DollarHandle from "./components/DollarHandle";
import Explainer from "./components/Explainer";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import PlasticCommunity from "./components/PlasticCommunity";
// import BillBoard from "./components/BillBoard";
import Footer from "./components/Footer";

// hack to retrieve the current enform status
import { resolveEnPageStatus } from "./components/EnForm/formHelpers";
let enPageStatus = resolveEnPageStatus();

//
window.ee = new mitt();

function App() {
  let checkMobile = window.innerWidth < 1200;

  const [pageResizing, setPageResizing] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [isMobile, setIsMobile] = useState(checkMobile);
  const [showFormModal, setShowFormModal] = useState(false);
  const [enFormSubmitted, setEnFormSubmitted] = useState(false);
  const springConfig = {
    type: "spring",
    stiffness: 300, // Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    damping: 200, // Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
    duration: 0.15
  };
  const motionFormModal = {
    show: {
      opacity: 1,
      x: 0
    },
    hidden: {
      opacity: 0,
      x: "100%"
    }
  };
  const motionMainButton = {
    show: {
      y: 0
    },
    hidden: {
      y: "100%"
    }
  };
  const mainButton = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      setShowActions(yPos > 50); // scroll over header
    };
    const handleWindowResize = () => {
      setPageResizing(true);
      if (window.innerWidth >= 1200) {
        setIsMobile(false);
      } else if (!isMobile && window.innerWidth < 1200) {
        setIsMobile(true);
        setShowFormModal(false);
      }
      setPageResizing(false);
    };
    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  // show the correct value based on the current en pages
  useEffect(() => {
    if (enPageStatus === "SUCC" && isMobile) {
      setEnFormSubmitted(true);
      setShowFormModal(true);
    } else if (enPageStatus === "SUCC") {
      setEnFormSubmitted(true);
    }
    if (enPageStatus === "ERROR" && isMobile) {
      setShowFormModal(true);
    }
    window.ee.on("SHOULD_CHOOSE_MONTHLY_AMOUNT", amount => {
      if (!showFormModal && isMobile) {
        setShowFormModal(true);
      }
    });
  }, []);

  return (
    <div className={cx("app", { "modal-open": showFormModal })}>
      <Header />
      {pageResizing && (
        <div className="loading--overlay">
          <img src={gpLogo} alt="greenpeace logo" />
        </div>
      )}
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
                className={cx("enform-wrapper", {
                  "is-sticky": !showFormModal
                })}
                style={{ overflowX: "hidden" }}
              >
                <motion.div
                  className="react-en-form"
                  initial="hidden"
                  exist="hidden"
                  animate={showFormModal || !isMobile ? "show" : "hidden"}
                  variants={motionFormModal}
                  transition={springConfig}
                >
                  <div className="enform-header">
                    <div className="welcome-message">
                      <div className="header-text">
                        {showFormModal && (
                          <i
                            onClick={() => {
                              setShowFormModal(false);
                            }}
                            className="return-arrow fa fa-arrow-left"
                          ></i>
                        )}
                        <p>
                          <strong>您的捐助，將讓走塑社區在香港遍地開花</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="enform-body">
                    <EnForm isMobile={isMobile} />
                  </div>
                  <div className="enform-note">
                    <small className="has-star">
                      捐款港幣$100以上可申請扣稅
                    </small>
                    <small className="has-star">
                      為維持公正獨立，綠色和平100%倚賴熱心市民捐助支持，20年來與您共創環境里程碑。
                    </small>
                  </div>
                </motion.div>
                <div className="enform-footer">
                  <div className="footer_remarks">
                    <p>注意事項</p>
                    <p>
                      此捐款頁面採用了 SSL
                      保安接層加密技術，可確保敏感資料（例如信用卡資料和個人資料）在您的瀏覽器和我們伺服器之間傳送時獲得保密處理。
                    </p>
                    <hr />
                    <p>
                      我們會即時進行首次過賬，隨後的每月捐款則會在每月13號過賬，若未能成功過賬，我們會在月底再次嘗試。信用卡到期後，每月捐款仍會自動延續。如有意取消或更改授權，必須於最少10個工作天之前，以書面或電話通知本會。
                    </p>
                    <hr />
                    <p>
                      收集所得的個人資料將絕對保密並只作和閣下聯絡用途！
                      <ExternalLink
                        href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
                        alt="私隱保護政策"
                      >
                        按此了解
                      </ExternalLink>
                      我們的私隱保護政策。
                    </p>
                    <p>
                      捐款港幣$100以上可申請扣稅。如需索取捐款收據，請聯絡
                      <ExternalLink
                        href="mailto:donor.services.hk@greenpeace.org"
                        alt="donor.services.hk@greenpeace.org"
                      >
                        donor.services.hk@greenpeace.org
                      </ExternalLink>
                      或致電 (852) 2854 8318。
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            <div className="main-left col-xs-12 col-lg-8 first-lg">
              <Hero />
              <Fade>
                <DollarHandle />
                <hr />
              </Fade>
              <Fade>
                <Intro />
                <hr />
              </Fade>
              <Fade>
                <Explainer />
              </Fade>
              <Fade>
                <Testimonial />
                <hr />
              </Fade>
              <Fade>
                <Timeline />
                <hr />
              </Fade>
            </div>
          </div>
          <PlasticCommunity />
        </div>
        <motion.div
          className={cx(
            "main-button",
            "is-flex",
            {
              "is-hidden": !isMobile
            },
            { "main-button--fixed": showActions }
          )}
          ref={mainButton}
          initial="hidden"
          exist="hidden"
          animate={showActions ? "show" : "hidden"}
          variants={motionMainButton}
          transition={springConfig}
        >
          <button
            className="button"
            onClick={() => {
              setShowFormModal(!showFormModal);
            }}
          >
            {enFormSubmitted ? "多謝您的支持" : "捐助支持"}
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
