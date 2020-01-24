import React from "react";
import "./index.scss";
//
export default props => {
  return (
    <section className="section">
      <div className="section-header">
        <p className="title">持續更新走塑社區活動</p>
        <p>
          成為綠色和平會員後，我們將定期經電郵或短訊，為您提供活動最新資訊。請您務必保持聯繫！
        </p>
      </div>
      <div className="billboard-wrapper has-text-centered">
        <p>
          18, Jan - 大埔 - 大元村鉻恩小學
          <br />
          <small>走塑團年飯</small>
        </p>
        <p>
          22, Feb - 大埔 - 路德會賽馬會富善綜合服務中心
          <br />
          <small>走塑社區推廣及 舊衣變環保袋Workshop</small>
        </p>
        <p>
          March - 沙田 - St. Rose of Lima's College
          <br />
          <small>走塑社區推廣及 舊衣變環保袋Workshop</small>
        </p>
        <p>
          20, Aug - 沙田 - 基督教協基會社會服務部 - 沙田家長資源中心
          <br />
          <small>走塑社區推廣及 舊衣變環保袋Workshop</small>
        </p>
      </div>
    </section>
  );
};
