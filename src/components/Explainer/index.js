import React from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";
//
import "./index.scss";
//
import picture1 from "../../assets/images/13d9a742-whatsapp-image-2019-10-19-at-4.42.47-pm-1536x1152.jpeg";
//
const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
//
const stepData = [
  {
    image: picture1,
    title: "籌備活動",
    description: "招募義工、準備物資，搜集資料選定店鋪地點"
  },
  {
    image: picture1,
    title: "走進社區",
    description: "帶領義工團隊到商鋪進行遊說工作"
  },
  {
    image: picture1,
    title: "走塑貼紙",
    description: "願意加入走塑的店鋪，將按其承諾貼上相應等級貼紙"
  },
  {
    image: picture1,
    title: "網頁持續更新",
    description: "持續更新走塑地圖、公佈最新活動資訊"
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
        <p>您的支持，讓我們持續進下以下工作</p>
      </div>
      <div className="explainer-wrapper">
        <Swiper {...swiperParams}>
          {stepData.map((step, i) => (
            <div className="swiper-slide" key={i}>
              <article className="article-step">
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <StyledImgContainer>
                      <img src={step.image} alt={step.title} />
                    </StyledImgContainer>
                  </div>
                  <div className="col-xs-12 col-md-6">
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
