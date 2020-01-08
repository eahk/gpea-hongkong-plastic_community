import React from "react";
import "./index.scss";

const supporterData = [
  {
    name: "Brian & Korean kid",
    headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Sharon",
    headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Tong / Chris",
    headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

function TestimonialCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <figure className="image">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="alt"
            />
          </figure>
        </div>
        <div className="testimonial-text">
          <p className="headline">{props.headline}</p>
          <p className="name">{props.name}</p>
        </div>
      </div>
    </div>
  );
}
export default props => {
  return (
    <section>
      <div className="container">
        <div className="testimonial-wrapper">
          {supporterData.map((supporter, key) => {
            return <TestimonialCard key={key} {...supporter} />;
          })}
        </div>
      </div>
    </section>
  );
};
