import React, { useState, useEffect, useRef } from "react";
import "./CommunityInfo.scss";

const IndexPanel = props => {
  return (
    <div className="index-panel">
      <h3 className="title">走塑地圖</h3>
      <div className="list-part">
        <ul>
          {Object.keys(props.districts).map(k => {
            return (
              <li
                key={k}
                onClick={() => {
                  props.onChooseDistrictId(k);
                }}
              >
                <div className="restaurant-name">{props.districts[k].name}</div>
                {props.districts[k].numRestaurants > 0 && (
                  <div className="num-restaurants">
                    <i className="fas fa-utensils"></i>{" "}
                    {props.districts[k].numRestaurants}
                  </div>
                )}
                {props.districts[k].numVotes > 0 && (
                  <div className="num-upvotes">
                    <i className="far fa-kiss-wink-heart"></i>{" "}
                    {props.districts[k].numVotes.toLocaleString()}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const DistrictPanel = props => {
  let theDistrict = props.districts[props.chosenDistrictId];

  const [isSendingVote, setIsSendingVote] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleVote = () => {
    setIsSendingVote(true);
    props
      .voteDistrict({ districtId: props.chosenDistrictId })
      .then(response => {
        console.log("handleVote return", response);
        setIsSendingVote(false);
        setIsSent(true);
      });
  };

  return (
    <div className="district-panel">
      {theDistrict && [
        <div className="hero-part" key="hero-part">
          <div
            className="go-back"
            onClick={() => {
              props.onChooseDistrictId(null);
            }}
          >
            <i className="fas fa-chevron-left"></i> Back
          </div>
          <div className="district-name">{theDistrict.name}</div>

          {theDistrict.numRestaurants > 0 && (
            <div className="num-restaurants">
              <i className="fas fa-utensils"></i> {theDistrict.numRestaurants}
            </div>
          )}
          {theDistrict.numVotes > 0 && (
            <div className="num-upvotes">
              <i className="far fa-kiss-wink-heart"></i>{" "}
              {theDistrict.numVotes.toLocaleString()}
            </div>
          )}
        </div>,
        <div className="upvote-part" key="upvote-part">
          {!isSendingVote && !isSent && (
            <div className="do-vote" onClick={handleVote}>
              Vote for {theDistrict.name}!!
            </div>
          )}
          {!isSendingVote && isSent && <div>Vote Successfull ~ </div>}
          {isSendingVote && (
            <div className="loading">
              {" "}
              <i className="fas fa-spinner fa-spin"></i>{" "}
            </div>
          )}{" "}
        </div>,
        <div className="restaurant-list" key="restaurant-list">
          <ul>
            {theDistrict.restaurants.map((r, i) => {
              return (
                <li className="restaurant-row" key={i}>
                  <div className="left-part">
                    <div className="r-name">
                      {i + 1}. {r.name}
                    </div>
                    <div className="r-address">
                      {r.address}
                      <a
                        href={`https://www.google.com.tw/maps/place/${r.address}`}
                        target="_blank"
                        alt={r.name}
                      >
                        <i className="fas fa-map-marked-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="right-part">
                    {r.herePlasticLevel > 0 && (
                      <div className="badge for-here" title="堂食走塑等級">
                        <span className="v">{r.herePlasticLevel}</span>
                      </div>
                    )}
                    {r.togoPlasticLevel > 0 && (
                      <div className="badge for-togo" title="外賣走塑等級">
                        <span className="v">{r.togoPlasticLevel}</span>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ]}

      {!props.restaurants && (
        <div className="loading fa-3x">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      )}
    </div>
  );
};

export default props => {
  return (
    <section className="community-info">
      {!props.chosenDistrictId && <IndexPanel {...props}></IndexPanel>}
      {props.chosenDistrictId && <DistrictPanel {...props}></DistrictPanel>}
    </section>
  );
};
