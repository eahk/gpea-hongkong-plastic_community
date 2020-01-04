import React from "react";

const heroClass = `hero`;

const Hero = ({ title, description }) => (
  <section
    className={heroClass}
    style={{
      backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"
    }}
  >
    <div className="container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </section>
);

export default Hero;
