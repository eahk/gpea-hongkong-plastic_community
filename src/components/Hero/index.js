import React from "react";
import "./index.scss";
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
    </section>
  );
};
