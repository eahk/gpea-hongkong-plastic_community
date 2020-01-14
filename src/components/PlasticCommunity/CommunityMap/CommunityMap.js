import React, { useState, useEffect, useRef } from "react";
import { districts } from "../DistrictsDef";
import { ReactComponent as CommunitySVG } from "./plasticCommunity.svg";

import "./CommunityMap.scss";

export default props => {
  const svgRef = useRef(null);

  const removeAllClass = className => {
    Object.keys(districts).forEach(k => {
      let row = districts[k],
        el = districts[k].el;
      if (!el) {
        return;
      }
      el.classList.remove(className);
    });
  };

  const setChoosenDistrict = districtId => {
    if (districts[districtId] && districts[districtId].el) {
      districts[districtId].el.classList.add("chosen");
    }
  };

  // update from props
  removeAllClass("chosen");
  setChoosenDistrict(props.chosenDistrictId);

  // bind events
  const [hasBindEvnts, setHasBindEvnts] = useState(false);
  useEffect(() => {
    let svg = svgRef.current;

    if (!svg) {
      return;
    }
    if (hasBindEvnts) {
      return;
    }

    setHasBindEvnts(true);

    Object.keys(districts).forEach(k => {
      let row = districts[k],
        el = svg.getElementById(row.svgId);

      if (el) {
        districts[k].el = el;
      }

      el.addEventListener("click", () => {
        props.onChooseDistrictId(k);
      });
      el.addEventListener("touchstart", () => {
        props.onChooseDistrictId(k);
      });
    });

    return () => {};
  }, [svgRef.current]);

  return <CommunitySVG id="community-map" ref={svgRef} />;
};
