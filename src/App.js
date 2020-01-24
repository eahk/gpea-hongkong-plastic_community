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
import ExternalLink from "./components/ExternalLink";
import Header from "./components/Header";
import EnForm from "./components/EnForm";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import PlasticCommunity from "./components/PlasticCommunity";
// import DollarHandle from "./components/DollarHandle";
import BillBoard from "./components/BillBoard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
//
window.ee = new mitt();
//
const formModalAnimation = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: "100%"
  }
};
//
function App() {
  let checkMobile = window.innerWidth < 1200;
  const [isMobile, setIsMobile] = useState(checkMobile);
  const [showFormModal, setShowFormModal] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1200) {
        setIsMobile(false);
      } else if (!isMobile && window.innerWidth < 1200) {
        setIsMobile(true);
        setShowFormModal(false);
      }
    };
    //
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
                    <div className="welcome-message">
                      <p>您的捐助，將讓走塑社區在香港遍地開花</p>
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
                    </div>
                  </div>
                  <EnForm />
                </motion.div>
                <div className="enForm-footer">
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
              <Testimonial />
              <Timeline />
              {/*
              <DollarHandle />
              */}
            </div>
          </div>
          <PlasticCommunity />
          <BillBoard />
        </div>
        <div
          className={cx("main-button", {
            "is-hidden": !isMobile
          })}
        >
          <button
            className="button"
            onClick={() => {
              setShowFormModal(!showFormModal);
            }}
          >
            捐助支持
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
