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
              <div className="headline-year">2021</div>
              <h1>
                <strong>走塑社區</strong>
                <br />
                有您有可能
              </h1>
            </div>
          </div>
          <div className="col-xs-12 col-md-7">
            <p className="subtitle is-orange">
              綠色和平持續招募走塑商戶，擴展香港走塑社區版圖！
            </p>
            <p className="is-orange">
              捐出等同您1%月入的金額，支持我們維持100%財政獨立，與綠色和平攜手令走塑社區在香港遍地開花。
            </p>
            <p>
              綠色和平在2018年推出「全城走塑計劃」，至今已有超過700間商戶加入走塑行列，我們希望能在2021年完結前，達成全港1,100間走塑商戶目標。
            </p>
            <p>
              您願意以每月$100 [每日約$3]
              小額捐助，支持綠色和平團隊的工作，將更多您關心的社區建成走塑社區，擴大全港走塑版圖嗎？
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
