import React, { useState, useEffect } from "react";
import mitt from "mitt";
import cx from "classnames";
import { useSpring, animated } from "react-spring";
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
// import DollarHandle from "./components/DollarHandle";
import Explainer from "./components/Explainer";
import Timeline from "./components/Timeline";
import PlasticCommunity from "./components/PlasticCommunity";
import BillBoard from "./components/BillBoard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
//
window.ee = new mitt();
//
function App() {
  let checkMobile = window.innerWidth < 1200;
  const [summary, setSummary] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageResizing, setPageResizing] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [showActions, setShowActions] = useState(false);
  const [isMobile, setIsMobile] = useState(checkMobile);
  const [showFormModal, setShowFormModal] = useState(false);
  const [enFormSubmitted, setEnFormSubmitted] = useState(false);
  //
  const formModal = useSpring({
    opacity: showFormModal || !isMobile ? 1 : 0
  });
  const mainButton = useSpring({
    transform: showActions ? "translateY(0)" : "translateY(100%)"
  });
  //
  useEffect(() => {
    /*
    const summaryEndPoint =
    "http://e-activist.com/ea-dataservice/data.service?service=EaDataCapture&token=7a06c0fc-32fe-43f1-8a1b-713b3ea496e1&campaignId=168645&contentType=json&resultType=summary";
    fetch(summaryEndPoint)
      .then(response => {
        response.json();
      })
      .then(response => {
        console.log(response);
        setSummary(response);
      })
      .catch(error => {
        console.log(error);
      });
      */
    const handleScroll = () => {
      const yPos = window.scrollY;
      // const isScrollingUp = yPos < lastYPos;
      setLastYPos(yPos);
      // window.ee.emit("SCROLL_DEPTH", yPos);
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
    // page status
    window.ee.on("PAGE_STATUS", pageStatus => {
      if (pageStatus === "SUCC") {
        setEnFormSubmitted(true);
      }
    });
    // window listener
    window.addEventListener("load", setPageLoaded(true));
    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={cx("app", { "modal-open": showFormModal })}>
      <Header />
      {(!pageLoaded || pageResizing) && (
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
                <animated.div className="react-en-form" style={formModal}>
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
                        <p>您的捐助，將讓走塑社區在香港遍地開花</p>
                      </div>
                      {/*
                      {!enFormSubmitted && (
                        <div className="is-flex-horizontal">
                          <div>
                            <p>$30,000</p>
                            <small>目標 $200,000</small>
                          </div>
                          <div>
                            <p>14</p>
                            <small>人支持</small>
                          </div>
                        </div>
                      )}
                      */}
                    </div>
                  </div>
                  <div className="enform-body">
                    <EnForm isMobile={isMobile} />
                  </div>
                  <div className="enform-note">
                    <br />
                    <small className="star">
                      <u>捐款港幣$100以上可申請扣稅</u>
                    </small>
                    <br />
                    <small>
                      為維持公正獨立，綠色和平100%倚賴熱心市民捐助支持，20年來與您共創環境里程碑。
                    </small>
                    <br />
                  </div>
                </animated.div>
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
                      或至電 (852) 2854 8318。
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            <div className="main-left col-xs-12 col-lg-8 first-lg">
              <Hero />
              <Intro />
              <Explainer />
              <Testimonial />
              <hr />
              <Timeline />
            </div>
          </div>
          <PlasticCommunity />
          <hr />
          <BillBoard />
        </div>
        <animated.div
          className={cx("main-button", "is-flex", {
            "is-hidden": !isMobile
          })}
          style={mainButton}
        >
          <button
            className="button"
            onClick={() => {
              setShowFormModal(!showFormModal);
            }}
          >
            {enFormSubmitted ? "多謝您的支持" : "捐助支持"}
          </button>
        </animated.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
