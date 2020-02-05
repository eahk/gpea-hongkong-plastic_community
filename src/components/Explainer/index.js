import React from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";
//
import "./index.scss";
//
import step1 from "../../assets/images/13d9a742-whatsapp-image-2019-10-19-at-4.42.47-pm-1536x1152.jpeg";
import step2 from "../../assets/images/13_4_hunt_selected.jpeg";
import step3 from "../../assets/images/A7304367.jpg";
import step4 from "../../assets/images/A7304285.jpg";
//
const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 240px;
  &:before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }
  &:before {
    z-index: 1;
    left: -8px;
    top: -8px;
    border-width: 30px 30px 0 0;
    border-color: var(--title) transparent transparent transparent;
  }
  &:after {
    right: -8px;
    bottom: -8px;
    border-width: 0 0 30px 30px;
    border-color: transparent transparent var(--title) transparent;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
//
const stepData = [
  {
    image: step1,
    title: "招募義工",
    description: "定期舉辦義工招募活動，與校園合作帶領學生、市民參與行動"
  },
  {
    image: step2,
    title: "籌備工作",
    description: "準備物資，搜集資料選定店鋪地點"
  },
  {
    image: step3,
    title: "走進社區",
    description: "帶領市民、學生義工團隊走進店鋪進行遊說工作"
  },
  {
    image: step4,
    title: "走塑貼紙以茲識別",
    description: "願意加入走塑的店鋪，將按其承諾貼上相應等級貼紙"
  }
];

const swiperParams = {
  slidesPerView: "auto",
  grabCursor: true
};

export default props => {
  return (
    <section className="section section-explainer">
      <div className="section-header">
        <p className="title">「走塑社區」歷程</p>
        <p>您的捐助，讓我們能持續進行走塑社區工作</p>
      </div>
      <div className="explainer-wrapper">
        <Swiper {...swiperParams}>
          {stepData.map((step, i) => (
            <div className="swiper-slide" key={i}>
              <article className="article-step">
                <div className="row">
                  <div className="col-xs-12 col-md-7 col-lg-8">
                    <StyledImgContainer>
                      <img src={step.image} alt={step.title} />
                    </StyledImgContainer>
                  </div>
                  <div className="col-xs-12 col-md-5 col-lg-4">
                    <div className="flex-wrapper">
                      <div>
                        <span className="step">0{i + 1}</span>
                        <p className="title">{step.title}</p>
                      </div>
                      <p className="description">{step.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
