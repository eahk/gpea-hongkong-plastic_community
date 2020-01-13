import React from "react";
import "./index.scss";
//
import heroBanner from "../../assets/images/GP0STRETY_Medium_res.jpg";
//
export default props => {
  return (
    <section className="section section-hero hero is-medium">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="hero-title">
        <h1 className="title">2020年 - 走塑社區遍地開花</h1>
      </div>
      <div className="row">
        <div className="has-text-centered">
          <div className="title">全城走塑，讓香港不一樣</div>
          <p>
            綠色和平正展開籌款活動，號召熱心市民捐助支持全城走塑計畫，與我們一起在2020年，與學校合辦走塑學堂、尋找走塑店鋪活動，遊說全港1,000間店鋪加入走塑行列，以及令大埔繼沙田之後，成為下一個走塑模範社區！
          </p>
        </div>
      </div>
    </section>
  );
};
