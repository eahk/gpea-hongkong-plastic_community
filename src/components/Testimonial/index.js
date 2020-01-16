import React from "react";
import "./index.scss";
//
import ExternalLink from "../ExternalLink";
import Swiper from "react-id-swiper";
//
import chris from "../../assets/images/section3-blog-chris.jpg";
import brian from "../../assets/images/section3-blog-brian6.jpg";
import sharon from "../../assets/images/section3-sharon.jpg";
import raymond from "../../assets/images/4ff3c5ed-4ff3c5ed-img_2150.jpg";
//
const supporterData = [
  {
    img: brian,
    name: "Brian & Korean kid",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/brian/",
    headline:
      "「綠色和平揭露塑膠正威脅海洋生物及人類健康，深深印在我的腦海。感染身邊大小朋友是不限年齡、身份的，人人都可以推動營造更綠色的地球。」"
  },
  {
    img: sharon,
    name: "Sharon",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/sharon/",
    headline:
      "「環保之事，人人有份，永不落空。希望透過支持綠色和平，讓組織集合眾人的聲音，向政府和企業施壓帶來改變。」"
  },
  {
    img: chris,
    name: "Chris",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/chris/",
    headline:
      "「一直有關注綠色和平的塑膠項目，現在更了解到即棄塑膠對環境有百害而無一利，危害動物甚至人類健康。」"
  },
  {
    img: raymond,
    name: "Raymond Lo",
    url: "",
    headline:
      "「對抗塑膠污染，自己出力，更與大眾共勉，一起秉承綠色和平的信念，以行動影響身邊的人，使香港不要變臭港，而是永遠的香港。」"
  }
];

const swiperParams = {
  autoHeight: true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
    // clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
};

const TestimonialCard = props => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="card-content">
        <div className="testimonial-text">
          <p className="headline">{props.headline}</p>
          <p className="name">
            <ExternalLink href={props.url} alt={props.headline}>
              <span>{props.name}</span>
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
};
export default props => {
  return (
    <section className="section section-testimonial">
      <div className="section-header">
        <p className="title">有很多香港人和您一樣</p>
        <p>
          有他們的支持，我們得以完成2018-2019年的目標，令全港600多間店鋪加入走塑行列。有您的支持，我們能成就全港更多走塑社區。
        </p>
      </div>
      <div className="testimonial-wrapper">
        <Swiper {...swiperParams}>
          {supporterData.map((supporter, key) => (
            <div className="swiper-slide" key={key}>
              <TestimonialCard {...supporter} />
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
