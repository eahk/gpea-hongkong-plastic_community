import React from "react";
import "../../../node_modules/bulma-timeline/dist/css/bulma-timeline.min.css";
//
import "./index.scss";
//
export default props => {
  return (
    <section className="section">
      <div className="section-header has-text-centered">
        <p className="title">走塑行事曆</p>
        <p>
          與我們一起在2020年，和學校合辦走塑學堂與社區走塑體驗活動，一起遊說全港1,000間店鋪加入走塑行列！
        </p>
      </div>
      <div className="timeline-wrapper">
        <div className="timeline">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">2018</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">尋找走塑食堂</p>
              <p>
                發起「尋找走塑食堂」計劃，動員超過150位義工加入行動至今已成功邀請。
              </p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">2019</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">走塑社區</p>
              <p>
                承接走塑食堂計劃，推出「走塑社區」項目：
                游說對象擴展至街市等社區店舖，沙田近半店舖加入。
              </p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">2020</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">4.22 - 地球日</p>
              <p>50間店鋪加入</p>
              <p>
                地球日前，走塑義工與捐助者一起在地球日走塑嘉年華階段性慶祝活動
              </p>
              <div
                className="timeline-content__image"
                style={{
                  backgroundImage:
                    "url(http://fakeimg.pl/300x300?font=lobster)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">6.8 - 海洋日</p>
              <p>150間店鋪加入</p>
              <p>一起愛海洋，走塑分享會</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
