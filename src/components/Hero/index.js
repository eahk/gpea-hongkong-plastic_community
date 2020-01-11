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
      <h1 className="title hero-title">2020年 - 走塑社區遍地開花</h1>
    </section>
  );
};
