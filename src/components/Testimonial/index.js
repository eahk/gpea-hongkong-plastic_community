import React from "react";
import styled from "styled-components";
import "./index.scss";
//
import ExternalLink from "../ExternalLink";
import Swiper from "react-id-swiper";
//
import chris from "../../assets/images/testimonials/section3-blog-chris.jpg";
import brian from "../../assets/images/testimonials/ORG_7R308815.jpg";
import sharon from "../../assets/images/testimonials/section3-sharon.jpg";
import raymond from "../../assets/images/testimonials/4ff3c5ed-4ff3c5ed-img_2150.jpg";
//
const supporterData = [
  {
    img: brian,
    name: "Brian",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/brian/",
    headline:
      "「綠色和平揭露塑膠正威脅海洋生物及人類健康，深深印在我的腦海。感染身邊大小朋友是不限年齡、身份的，人人都可以推動營造更綠色的地球。」",
    intro: "出版個人繪本為綠色和平籌款"
  },
  {
    img: sharon,
    name: "Sharon",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/sharon/",
    headline:
      "「環保之事，人人有份，永不落空。希望透過支持綠色和平，讓組織集合眾人的聲音，向政府和企業施壓帶來改變。」",
    intro: "自2015年開始捐助綠色和平"
  },
  {
    img: raymond,
    name: "Raymond Lo",
    url: "",
    headline:
      "「對抗塑膠污染，自己出力，更與大眾共勉，一起秉承綠色和平的信念，以行動影響身邊的人，使香港不要變臭港，而是永遠的香港。」",
    intro: "獨木舟環島為綠色和平籌款"
  },

  {
    img: chris,
    name: "Chris",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/chris/",
    headline:
      "「一直有關注綠色和平的塑膠項目，現在更了解到即棄塑膠對環境有百害而無一利，危害動物甚至人類健康。」",
    intro: "自2012年開始捐助綠色和平"
  }
];

const swiperParams = {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true
};

const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

const TestimonialCard = props => {
  return (
    <div className="card">
      <div className="card-image">
        <StyledImgContainer>
          <img src={props.img} alt={props.name} />
        </StyledImgContainer>
      </div>
      <div className="card-content">
        <div className="testimonial-text">
          <p className="headline">{props.headline}</p>
          <p className="name">
            <span>{props.name}</span>
          </p>
          <ExternalLink href={props.url} alt={props.headline}>
            <small>{props.intro}</small>
          </ExternalLink>
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
        <p>聽聽綠色和平「走塑計劃」捐助者的心聲</p>
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
