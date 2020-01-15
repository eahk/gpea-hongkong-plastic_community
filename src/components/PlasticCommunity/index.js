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
    </section>
  );
};
