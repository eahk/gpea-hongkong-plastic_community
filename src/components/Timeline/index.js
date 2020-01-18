import React from "react";
import "../../../node_modules/bulma-timeline/dist/css/bulma-timeline.min.css";
//
import "./index.scss";
//
import timeline2018 from "../../assets/images/13d9a742-whatsapp-image-2019-10-19-at-4.42.47-pm-1536x1152.jpeg";
import timeline2019 from "../../assets/images/bcacd4ad-gp0stt8of_medium_res.jpg";
//
export default props => {
  return (
    <section className="section section-timeline">
      <div className="section-header">
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
                發起<strong>「尋找走塑食堂」</strong>計劃
              </p>
              <p>
                至今已成功邀請超過<strong>150位</strong>義工加入
              </p>
              <div
                className="timeline-content__image"
                style={{
                  backgroundImage: `url(${timeline2018})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
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
                承接走塑食堂計劃，推出<strong>「走塑社區」</strong>
              </p>
              <p>游說對象擴展至街市等社區店舖，沙田有近半店舖加入</p>
              <div
                className="timeline-content__image"
                style={{
                  backgroundImage: `url(${timeline2019})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">2020</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">4.22 - 世界地球日</p>
              <p>
                地球日前夕，舉辦義工日，<strong>遊說50間店鋪</strong>{" "}
                加入走塑行列
              </p>
              <p>地球日當天舉辦工作坊及活動，嘉許義工成為「走塑大使」</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">6.8 - 海洋日</p>
              <p>
                健康海洋＝健康地球 為海洋打打氣，在世界海洋日，
                <strong>遊說150間店鋪加入走塑行列</strong>
              </p>
              <p>
                透過工作坊及活動，教育及鼓勵更多市民關注海洋健康，支持走塑行動
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">7月 - Plastic Free Month</p>
              <p>
                響應世界走塑月，達成<strong>遊說100間店鋪</strong>
                加入走塑行列目標
              </p>
              <p>沙田和大埔成為走塑模範社區，向減少各區塑膠垃級繼續進發</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">12月</p>
              <p>
                完成<strong>1,000間店鋪</strong>目標
              </p>
              <p>
                年尾點算「你最想走塑社區」投票結果，計劃來年重點社區，向香港成為走塑城市繼續進發！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
