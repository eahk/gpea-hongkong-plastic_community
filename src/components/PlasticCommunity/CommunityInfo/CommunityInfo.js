import React, { useState } from "react";
import "./CommunityInfo.scss";
import { useVote } from "../hooks";

const IndexPanel = props => {
  return (
    <div className="index-panel">
      <div className="list-part">
        <ul>
          {Object.keys(props.districts).map(k => {
            return (
              <li
                className="card-district"
                key={k}
                onClick={() => {
                  props.onChooseDistrictId(k);
                }}
              >
                <div className="district-name">{props.districts[k].name}區</div>
                <div className="num-flex">
                  {props.districts[k].numRestaurants > 0 && (
                    <div className="num-restaurants">
                      <i className="fas fa-utensils"></i>{" "}
                      <span>{props.districts[k].numRestaurants}</span>
                    </div>
                  )}
                  {props.districts[k].numVotes > 0 && (
                    <div className="num-upvotes">
                      <i className="far fa-kiss-wink-heart"></i>{" "}
                      <span>
                        {props.districts[k].numVotes.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
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

  const [hasVoted, doVote] = useVote();
  const [voteStatus, setVoteStatue] = useState(
    hasVoted ? "HAS_VOTED_BEFORE" : "NEW"
  );

  const handleVote = () => {
    setVoteStatue("IS_SENDING");

    doVote(props.chosenDistrictId, {
      onSucc: response => {
        console.log("handleVote return", response);
        setVoteStatue("VOTE_SUCC");
      },
      onError: error => {
        console.log("handleVote error", error);
        setVoteStatue("VOTE_FAILED");
      }
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
            <i className="fas fa-chevron-left"></i>返回
          </div>
          <div className="district-name">{theDistrict.name}區</div>
          <div className="num-flex">
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
          </div>
        </div>,
        <div className="upvote-part" key="upvote-part">
          <span>「走塑友善」餐廳與商鋪</span>
          <div className="do-vote button ">
            {voteStatus === "NEW" && (
              <div onClick={handleVote}>
                為{theDistrict.name}
                區打氣
              </div>
            )}
            {voteStatus === "HAS_VOTED_BEFORE" && <div>感謝你的參與～</div>}
            {voteStatus === "IS_SENDING" && (
              <div className="loading">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            )}
            {voteStatus === "VOTE_SUCC" && (
              <div className="do-vote">
                <div>感謝你的支持，我們會努力推動更多店鋪加入走塑行列～</div>
              </div>
            )}
            {voteStatus === "VOTE_FAILED" && (
              <div className="is-danger">
                啊我們伺服器出了一些問題，請稍後再試一次～
              </div>
            )}
          </div>
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
                        href={`https://www.google.com.hk/maps/place/${r.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        alt={r.name}
                      >
                        <i className="fas fa-map-marked-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="right-part">
                    {r.herePlasticLevel > 0 && (
                      <div className="badge for-here" title="堂食走塑等級">
                        <span className="v">{r.herePlasticLevel}級</span>
                      </div>
                    )}
                    {r.togoPlasticLevel > 0 && (
                      <div className="badge for-togo" title="外賣走塑等級">
                        <span className="v">{r.togoPlasticLevel}級</span>
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
