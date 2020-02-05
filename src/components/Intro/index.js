import React, { useState } from "react";
import Swiper from "react-id-swiper";
import YouTubePlayer from "react-player/lib/players/YouTube";
//
import "./index.scss";
//
import calendar from "../../assets/images/icons/calendar.png";
import participant from "../../assets/images/icons/participant.png";
import store from "../../assets/images/icons/store.png";
import grade1 from "../../assets/images/GP_PlasticFreeStickers_grade1.png";
import grade2 from "../../assets/images/GP_PlasticFreeStickers_grade2.png";
import pic2 from "./../../assets/images/GP0STTWGQ_Medium_res.jpg";
//
const ImageSlider = () => {
  const imageList = [
    pic2,
    "https://storage.googleapis.com/planet4-hongkong-stateless/2019/06/c05bf80a-c05bf80a-dsc03216.jpg",
    "https://media.greenpeace.org/GPIDoc/GPI/Media/TR1/3/2/f/9/GP0STTWGX.jpg?d63704397645",
    "https://media.greenpeace.org/GPIDoc/GPI/Media/TR1/d/e/8/b/GP0STT8OT.jpg?d63691597170",
    "https://storage.googleapis.com/planet4-hongkong-stateless/2019/04/e61296f9-a7304293.jpg"
  ];
  const params = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    }
  };
  return (
    <Swiper className="image-slider" {...params}>
      {imageList.map((image, key) => (
        <div className="column__img" key={key}>
          <img src={image} alt="slider" />
        </div>
      ))}
    </Swiper>
  );
};
//
export default props => {
  const [showPlayer, setPlayer] = useState(false);
  //
  const showPlayerWrapper = () => {
    setPlayer(true);
  };
  return (
    <section className="section-intro">
      <div className="level target-num is-hidden">
        <figure className="level-item">
          <span>2020年</span>
          <p>擴大走塑學堂、走塑店鋪</p>
          <img className=" target-icon" src={calendar} alt="calendar" />
        </figure>
        <figure className="level-item">
          <span>720位</span>
          <p>每月60位熱心市民捐助支持走塑計畫</p>
          <img className=" target-icon" src={participant} alt="participant" />
        </figure>
        <figure className="level-item">
          <span>1,000間</span>
          <p>商鋪提供走塑友善措施</p>
          <img className="target-icon" src={store} alt="store" />
        </figure>
      </div>
      {/*
      <div className="row text-right">
        <div className="col-xs-12 col-md-6">
          <div className="column__img">
            <img src={pic1} alt="pic1" />
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <p className="title">title</p>
          <p>paragraph
          </p>
        </div>
      </div>
      */}
      <div className="row text-left">
        <div className="col-xs-12 col-md-6">
          <p className="title">「全城走塑」項目成果</p>
          <div className="content">
            <ul>
              <li>組織義工團隊，在全港600間店鋪貼上「走塑貼紙」</li>
              <li>
                沙田超過8成店鋪提供走塑友善措施，成為全港第一個走塑模範社區
              </li>
              <li>與藝人唐寧親身到社區，遊說店鋪走塑</li>
              <li>為家庭、學校提供走塑店鋪體驗活動</li>
              <li>
                成功推動百佳試行裸裝蔬果計劃，旗下GREAT超市增設「裸買補充站」，顧客能自備容器購買產品
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <ImageSlider />
        </div>
      </div>
      <hr />
      <div className="row row-sticker">
        <div className="col-xs-12 col-md-6 col-lg-5">
          <div className="section-header has-text-left">
            <p className="title">「全城走塑」貼紙</p>
            <p>走塑友善店鋪，貼紙等級話您知</p>
            <p>
              走塑貼紙分為兩個等級，顯示店鋪有提供不同程度的走塑措施。得到您的支持，我們才有資源推動更多店鋪加入走塑行列，貼上走塑貼紙！
            </p>
            <span className="watch link" onClick={showPlayerWrapper}>
              觀看影片 <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-7">
          {!showPlayer && (
            <div className="sticker-wrapper">
              <div className="sticker">
                <figure className="image">
                  <img className="is-rounded" src={grade1} alt="一級走塑店鋪" />
                </figure>
                <div className="sticker__name">一級走塑店鋪</div>
                <ul>
                  <li>完全淘汰即棄塑膠 或</li>
                  <li>提供走塑優惠</li>
                </ul>
                <button className="button" onClick={showPlayerWrapper}>
                  觀看影片
                </button>
              </div>
              <div className="sticker">
                <figure className="image">
                  <img className="is-rounded" src={grade2} alt="二級走塑店鋪" />
                </figure>
                <div className="sticker__name">二級走塑店鋪</div>
                <ul>
                  <li>不主動提供即棄塑膠 或</li>
                  <li>歡迎自備餐具 / 器皿購物</li>
                </ul>
                <button className="button" onClick={showPlayerWrapper}>
                  觀看影片
                </button>
              </div>
            </div>
          )}
          {showPlayer && (
            <div className="player-wrapper">
              <YouTubePlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=NC9qmrS-Cg4&"
                width="100%"
                height="100%"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
