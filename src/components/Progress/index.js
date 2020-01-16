import React from "react";
//
import "./index.scss";
//
import huntPic from "../../assets/images/13_4_hunt_selected.jpeg";
import stickerChild from "../../assets/images/2019041965638PM.jpeg";
import storePic from "../../assets/images/A7304367.jpg";
import groupImage from "../../assets/images/2019041953459PM.jpeg";
//

const Explainer = props => {
  return (
    <div className="card-explainer explainer">
      <div className="row">
        <div className="col-xs-12 col-md-7 col-lg-5 explainer__description">
          <h3>籌備工作</h3>
          <p>招募義工、準備物資，搜集資料選定店鋪地點</p>
        </div>
        <div
          className="col-xs-12 col-md-5 col-lg-7 explainer__thumbnail"
          style={{
            backgroundImage: `url(${huntPic})`
          }}
        ></div>
      </div>
    </div>
  );
};
export default props => {
  return (
    <section className="section">
      <div className="section-header has-text-centered">
        <p>您的支持，讓我們持續進下以下工作</p>
      </div>
      <div className="progress-wrapper">
        <div className="flex-container">
          <Explainer />
          <Explainer />
          <Explainer />
        </div>
      </div>
    </section>
  );
};
