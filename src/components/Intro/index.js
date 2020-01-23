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
import pic1 from "../../assets/images/GP0STTJ1J_Medium_res.jpg";
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
    effect: "fade",
    autoplay: {
      delay: 3000,
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
  const shade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const modalAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { delay: 0.15 } }
  };
  const showPlayerWrapper = () => {
    setPlayer(true);
  };
  return (
    <section className="section section-intro">
      <div className="middle-md row">
        <div className="col-xs-12 col-md-6 col-lg-5">
          <div className="intro-headline">
            <div className="headline-year">
              <span>20</span>
              <span>20</span>
            </div>
            <h1>
              走塑社區
              <br />
              遍地開花
            </h1>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-7">
          <div className="row">
            <div className="col-xs-12 col-xl-6">
              <p>
                綠色和平現正號召熱心市民，捐助支持全城走塑計畫！讓我們在2020年，有足夠資源和學校合辦走塑學堂、延續尋找走塑店鋪活動：
                達成全港1,000間店鋪貼上走塑貼紙目標、大埔繼沙田成為新一個走塑模範社區，讓消費者能輕鬆走塑，環保消費！
              </p>
            </div>
            <div className="col-xs-12 col-xl-6">
              <p>
                <strong>第一季目標：</strong>
                我們期望每月招募到60位支持者，以支持義工團隊的工作，達成在大埔區50間店鋪貼上走塑貼紙的目標。
              </p>
            </div>
          </div>
        </div>
        <div className="target-num">
          <figure>
            <img className="target-icon" src={calendar} alt="calendar" />
            <span>2020年</span>
            <p>繼續走塑學堂、走塑店鋪</p>
          </figure>
          <figure>
            <img className="target-icon" src={participant} alt="participant" />
            <span>180位</span>
            <p>每月60位捐款會員加入走塑計畫</p>
          </figure>
          <figure>
            <img className="target-icon" src={store} alt="store" />
            <span>1,000間</span>
            <p>商鋪加入推動走塑模範社區</p>
          </figure>
        </div>
      </div>
      {/*
      <div className="row text-right">
        <div className="col-xs-12 col-md-6">
          <div className="column__img">
            <img src={pic1} alt="pic1" />
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <p className="title">我們的目標</p>
          <p>
            我們期望在第一季每月招募到60位支持者支持走塑計畫。我們將善用您的一分一毫，與義工團隊到達大埔區，遊說50間店鋪加入走塑，並與學校、區議員合力擴大走塑社區板圖。
          </p>
          <p>
            您的點滴支持，是支持我們全年長期工作的力量，讓我們合力達成2020年目標，共創走塑社區！
          </p>
        </div>
      </div>
      */}
      <div className="row text-left">
        <div className="col-xs-12 col-md-6">
          <p className="title">全城走塑項目成果</p>
          <p>
            自2018年起，我們與家庭、學校、義工團隊，甚至藝人唐寧親身到社區，遊說店鋪走塑。在大家努力下，目前全港已有600間店鋪加入，沙田亦成為了第一個走塑模範社區。2020年，我們希望更多店鋪貼起「全城走塑」貼紙，讓消費者輕鬆走塑，環保消費！
          </p>
          <p>
            除了社區工作，我們亦成功推動百佳公布裸裝蔬果試行計劃，成功減少3萬多件塑膠，旗下GREAT超市增設「裸買補充站」，讓顧客能自備容器購買產品！
          </p>
        </div>
        <div className="col-xs-12 col-md-6">
          <ImageSlider />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-5 col-lg-4">
          <div className="section-header has-text-left">
            <p className="title">全城走塑貼紙</p>
            <p>
              經我們成功遊說的店鋪，會貼上全城走塑貼紙，每個貼上走塑貼紙的店鋪，代表店鋪願意加入走塑的承諾。
            </p>
            <p>
              得到您的支持，我們才有資源推動更多店鋪加入走塑行列，貼上走塑貼紙！
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-md-7 col-lg-8">
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
