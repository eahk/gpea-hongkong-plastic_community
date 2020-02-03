import React from "react";
import "./index.scss";
//
export default props => {
  return (
    <section className="section">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-5">
          <div className="section-header">
            <p className="title">持續更新走塑社區活動</p>
            <p>
              成為綠色和平會員後，我們將定期經電郵或短訊，為您提供活動最新資訊。請您務必保持聯繫！
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-7">
          <div className="billboard-wrapper has-text-centered">
            <div className="card">
              <p>
                18, Jan - 大埔 - 走塑團年飯
                <br />
                <small>大元村鉻恩小學</small>
              </p>
            </div>
            <div className="card">
              <p>
                22, Feb - 大埔 - 走塑社區推廣及 舊衣變環保袋Workshop
                <br />
                <small>路德會賽馬會富善綜合服務中心</small>
              </p>
            </div>
            <div className="card">
              <p>
                March - 沙田 - 走塑社區推廣及 舊衣變環保袋Workshop
                <br />
                <small>St. Rose of Lima's College</small>
              </p>
            </div>
            <div className="card">
              <p>
                20, Aug - 沙田 - 走塑社區推廣及舊衣變環保袋Workshop
                <br />
                <small>基督教協基會社會服務部 - 沙田家長資源中心</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
