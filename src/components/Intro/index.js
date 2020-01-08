import React from "react";
import "./index.scss";

export default props => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns-wrapper">
          <div className="columns is-multiline">
            <div className="column intro is-full">
              <p className="title">全城走塑貼紙及店鋪</p>
              <p className="subtitle">
                經我們成功遊說的店鋪，會貼上全城走塑貼紙
                （一級、二級走塑店鋪），方便大家識別！
              </p>
            </div>
            <div className="column sticker is-full">
              <div className="sticker-wrapper">
                <img src="https://dummyimage.com/400x400.jpg" alt="pic1" />
                <img src="https://dummyimage.com/400x400.jpg" alt="pic2" />
              </div>
            </div>
          </div>
        </div>
        <div className="columns-wrapper text-right">
          <div className="columns is-vcentered">
            <div className="column">
              <h2>Header2</h2>
              <h3>Header3</h3>
            </div>
            <div className="column">
              <p className="title">計畫目標</p>
              <p>
                我們期望在第一季招募60位的每月支持者，長期支持走塑計畫，我們將善用您的一分一毫，與義工團隊到達大埔區，遊說50間店鋪加入走塑，並與學校、區議員合力擴大走塑社區板圖。您的點滴支持，是支持我們全年長期工作的力量，讓我們合力達成2020年目標，共創走塑社區！
              </p>
              <p className="grayText">
                沒有您的支持，我們無法達到目標，因為我們不接受政府、企業的捐款，100%全賴如您一般熱心市民的資助。懇請您資助推動全城走塑項目！
              </p>
            </div>
          </div>
        </div>
        <div className="columns-wrapper text-left">
          <div className="columns is-vcentered">
            <div className="column">
              <div className="text">
                <small className="small">With your help.</small>
                <p className="title">Title</p>
              </div>
              <p>
                Consectetur eu fugiat dolore consequat. Elit et Lorem
                consectetur proident elit nostrud excepteur minim officia cillum
                magna velit eu. Culpa anim eu consectetur ea est adipisicing id.
              </p>
            </div>
            <div className="column">
              <div className="column__img">
                <img src="https://dummyimage.com/600x400.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
