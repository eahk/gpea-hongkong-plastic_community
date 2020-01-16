import React, { useState } from "react";
import { useDistrictRestaurans } from "./hooks";
import CommunityMap from "./CommunityMap/CommunityMap.js";
import CommunityInfo from "./CommunityInfo/CommunityInfo.js";
import "./index.scss";

export default props => {
  const [chosenDistrictId, setChosenDistrictId] = useState(null);
  const [districts, restaurants] = useDistrictRestaurans();

  return (
    <section className="section is-light plastic-community">
      <div className="section-header has-text-centered">
        <p className="title">18區走塑藍圖</p>
      </div>
      <figure className="community-figure">
        <div className="community-info">
          <CommunityInfo
            chosenDistrictId={chosenDistrictId}
            districts={districts}
            restaurants={restaurants}
            onChooseDistrictId={districtId => {
              setChosenDistrictId(districtId);
            }}
          />
        </div>
        <div className="community-map">
          <CommunityMap
            chosenDistrictId={chosenDistrictId}
            onChooseDistrictId={districtId => {
              setChosenDistrictId(districtId);
            }}
          />
        </div>
      </figure>
    </section>
  );
};
