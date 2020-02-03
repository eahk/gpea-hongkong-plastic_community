import React from "react";
//
import "./index.scss";
//
export default props => {
  return (
    <div className="intro-headline">
      <div className="middle-md row">
        <div className="col-xs-12 col-md-6 col-lg-6 col-xl-5">
          <div className="headline-text">
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
        <div className="col-xs-12 col-md-6 col-lg-6 col-xl-7">
          <p className="subtitle is-orange">「全城走塑計畫」熱烈募資中！</p>
          <p>
            <small>
              您收入1%的捐款足以支持我們維持100%財政獨立！與綠色和平攜手令走塑社區在香港遍地開花。
            </small>
          </p>
          <p>
            您的捐助，將讓我們在2020年有足夠資源與學校合辦「走塑學堂」、延續「尋找走塑店鋪」活動，
            達成<strong>全港1,000間店鋪</strong>
            提供走塑友善措施，讓大埔繼沙田之後成為新一個走塑模範社區，令香港人可以輕鬆走塑，環保消費！
          </p>
          <p>
            第一季目標：我們期望招募到<strong>180位每月捐助者</strong>
            ，每日約2位熱心市民捐助支持走塑計畫及義工團隊的工作，達成在大埔區50間店鋪貼上走塑貼紙的目標。
          </p>
        </div>
      </div>
    </div>
  );
};
