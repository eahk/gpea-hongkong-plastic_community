import React from "react";
import "../../../node_modules/bulma-timeline/dist/css/bulma-timeline.min.css";
import "./index.scss";
//
export default props => {
  return (
    <section className="section section-timeline">
      <div className="section-header">
        <p className="title">社區走塑行事曆</p>
        <p>您的捐助讓我們能夠舉辦更多體驗活動，共同邁向全城走塑的目標</p>
      </div>
      <div className="timeline-wrapper">
        <div className="timeline">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">2020</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">4.22 - 世界地球日</p>
              <p>
                地球日前夕舉辦義工日，
                <strong>遊說共650間店鋪</strong>加入走塑行列
              </p>
              <p>舉辦地球日工作坊及活動，嘉許義工及捐助者成為「走塑大使」</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">6.8 - 海洋日</p>
              <p>
                健康海洋＝健康地球 為海洋打打氣，在世界海洋日
                <strong>遊說共800間店鋪</strong>加入走塑行列
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
                響應世界走塑月，<strong>遊說共900間店鋪</strong>
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
                完成2020年合共<strong>1,000間</strong>店鋪目標
              </p>
              <p>
                我們計畫今年內發起「你最想走塑社區」投票，計劃來年重點社區，向香港全城走塑繼續邁進，共創宜居城市
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
                承接走塑食堂計劃，推出<strong>「走塑社區」</strong>
              </p>
              <p>對象擴展至街市等社區店鋪，沙田有近半店鋪加入</p>
              <p>
                成功推動百佳試行裸裝蔬果計劃，旗下GREAT超市增設「裸買補充站」，顧客能自備容器購買產品
              </p>
            </div>
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
