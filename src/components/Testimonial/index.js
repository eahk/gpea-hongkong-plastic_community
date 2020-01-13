import React from "react";
import "./index.scss";
//
import Swiper from "react-id-swiper";
//
const supporterData = [
  {
    img: "",
    name: "Brian & Korean kid",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/brian/",
    headline:
      "綠色和平揭露塑膠正威脅海洋生物及人類健康，深深印在我的腦海。感染身邊大小朋友是不限年齡、身份的，人人都可以推動營造更綠色的地球。"
  },
  {
    img: "",
    name: "Sharon",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/sharon/",
    headline:
      "環保之事，人人有份，永不落空。希望透過支持綠色和平，讓組織集合眾人的聲音，向政府和企業施壓帶來改變"
  },
  {
    img: "",
    name: "Chris",
    url:
      "https://change.greenpeace.org.hk/general/annual/2018/peoplepower/chris/",
    headline:
      "一直有關注綠色和平的塑膠項目，現在更了解到即棄塑膠對環境有百害而無一利，危害動物甚至人類健康。"
  },
  {
    img: "",
    name: "Raymond Lo",
    url: "",
    headline:
      "對抗塑膠污染，自己出力，更與大眾共勉，一起秉承綠色和平的信念，以行動影響身邊的人，使香港不要變臭港，而是永遠的香港。"
  }
];

const swiperParams = {
  slidesPerView: "auto",
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 3
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
};

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
          <p className="name">- {props.name} -</p>
        </div>
      </div>
    </div>
  );
}
export default props => {
  return (
    <section className="section">
      <div className="testimonial-wrapper">
        <div className="has-text-centered">
          <p className="title">有很多香港人，和您一樣</p>
          <p>
            有他們的支持，我們得以完成2018-2019年的目標，令全港600多間店鋪加入走塑行列。有您的支持，我們能成就全港更多走塑社區。
          </p>
        </div>
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
