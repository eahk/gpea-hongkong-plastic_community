import React from "react";
import "./index.scss";
//
// import heroBanner from "../../assets/images/GP0STRETY_Medium_res.jpg";
// import heroBanner from "../../assets/images/GP0STREPE_Medium_res.jpg";
import heroBanner from "../../assets/images/A7306540.jpg";
//
export default props => {
  return (
    <section className="section section-hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBanner})`
        }}
      ></div>
      {/*
      <div className="hero-title title">
        <div className="banner-year">
          <h2>
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>0</span>
            <span>年</span>
          </h2>
        </div>
        <div className="banner-headline">
          <h1>
            <span>走</span>
            <span>塑</span>
            <span>社</span>
            <span>區</span>
          </h1>
          <h1>
            <span>遍</span>
            <span>地</span>
            <span>開</span>
            <span>花</span>
          </h1>
        </div>
      </div>
      */}
    </section>
  );
};
