import React, { useState } from "react";
import { useDistrictRestaurans } from "./hooks";
import CommunityMap from "./CommunityMap/CommunityMap.js";
import CommunityInfo from "./CommunityInfo/CommunityInfo.js";
import "./index.scss";

export default props => {
  const [chosenDistrictId, setChosenDistrictId] = useState(null);
  const [districts, restaurants] = useDistrictRestaurans();

  return (
    <section className="section section-community is-light plastic-community">
      <div className="section-header">
        <p className="title">18區走塑藍圖</p>
        <p>你可以透過以下地圖以及選單，尋找「走塑友善」餐廳與商鋪</p>
      </div>
      <figure className="community-figure">
        <CommunityInfo
          chosenDistrictId={chosenDistrictId}
          districts={districts}
          restaurants={restaurants}
          onChooseDistrictId={districtId => {
            setChosenDistrictId(districtId);
          }}
        />
        <CommunityMap
          chosenDistrictId={chosenDistrictId}
          onChooseDistrictId={districtId => {
            setChosenDistrictId(districtId);
          }}
        />
      </figure>
    </section>
  );
};
