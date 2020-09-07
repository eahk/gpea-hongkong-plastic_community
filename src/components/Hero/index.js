import React from "react";
import "./index.scss";
//
// import Goals from "../Goals";
import heroBanner from "../../assets/images/A7306540.jpg";
//
export default props => {
  return (
    <>
      <section className="section section-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${heroBanner})`
          }}
        ></div>
      </section>
      <div className="intro-headline">
        <div className="middle-md row">
          <div className="col-xs-12 col-md-5">
            <div className="headline-text">
              <div className="headline-year">2020</div>
              <h1>
                <strong>走塑社區</strong>
                <br />
                &nbsp;遍地開花
              </h1>
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <p className="subtitle is-orange">「全城走塑計畫」熱烈募資中！</p>
            <p className="is-orange">
              捐出等同您1%月入的金額，支持我們維持100%財政獨立，與綠色和平攜手令走塑社區在香港遍地開花。
            </p>
            <p>
              全年目標：您的捐助，將讓我們在2020年有足夠資源與學校合辦「走塑學堂」、延續「尋找走塑店鋪」活動，
              達成<strong>全港1,000間店鋪</strong>
              提供走塑友善措施，讓大埔繼沙田之後成為新一個走塑模範社區。
            </p>
            <p>
              地球日之前，我們期望招募到180位每月捐助者，並在2020整年招募到700位每月支持者，每日約2位熱心市民捐助支持走塑計畫及義工團隊的工作，達成在大埔區再多50間店鋪貼上走塑貼紙的目標，令香港人可以輕鬆走塑，環保消費！
            </p>
            {/*
            <Goals />
            */}
          </div>
        </div>
      </div>
    </>
  );
};
