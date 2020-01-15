import React, { useState, useEffect, useRef } from "react";
import { districts as districtsDef, districtNameToId } from "./DistrictsDef";
import CommunityMap from "./CommunityMap/CommunityMap.js";
import CommunityInfo from "./CommunityInfo/CommunityInfo.js";
import "./index.scss";

// Region 區域
// District 地區
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxQzeRwXhNC6tQnc4Kjd9pJiWAUQPIQI8DRE14JSYwMFgCTOlhn/exec"; // dev

/** Conver the server restaurant table into object**/
const parseRestaurantResponse = (districts, values) => {
  // resolve the attr index
  // the first row is title
  let firstRow = values.shift();
  let nameIdx = firstRow.indexOf("餐廳名稱"),
    foodTypeIdx = firstRow.indexOf("餐廳類別"),
    regionNameIdx = firstRow.indexOf("區域"),
    districtNameIdx = firstRow.indexOf("地區"),
    addressIdx = firstRow.indexOf("餐廳地址"),
    herePlasticLevelIdx = firstRow.indexOf("堂食走塑等級"),
    togoPlasticLevelIdx = firstRow.indexOf("外賣走塑等級");

  // parse the table into objects
  let data = [];
  values.forEach((row, i) => {
    let name = row[nameIdx],
      foodType = row[foodTypeIdx],
      regionName = row[regionNameIdx],
      districtName = row[districtNameIdx],
      address = row[addressIdx],
      herePlasticLevel = row[herePlasticLevelIdx],
      togoPlasticLevel = row[togoPlasticLevelIdx];

    // convert plastic level to int
    herePlasticLevel =
      ["一", "二", "三"].indexOf(herePlasticLevel.charAt(0)) + 1;
    togoPlasticLevel =
      ["一", "二", "三"].indexOf(togoPlasticLevel.charAt(0)) + 1;

    // add the district id
    let districtId = districtNameToId(districtName);

    // push into values array
    data.push({
      name,
      foodType,
      regionName,
      districtName,
      districtId,
      address,
      herePlasticLevel,
      togoPlasticLevel
    });
  });

  // calculate by aggregate values
  data.forEach(row => {
    if (row.districtId) {
      districts[row.districtId].numRestaurants += 1;
    }
  });

  // collect restaurants
  data.forEach(row => {
    if (row.districtId) {
      districts[row.districtId].restaurants.push(row);
    }
  });
  // sort restaurant based on the name
  Object.keys(districts).forEach(k => {
    districts[k].restaurants.sort((lhs, rhs) => {
      let a = String(rhs.name).charCodeAt(0),
        b = String(lhs.name).charCodeAt(0);

      if (a > b) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0;
    });
  });

  return [districts, data];
};

const pasrseVotesResponse = (districts, votes) => {
  votes.forEach(row => {
    districts[row.districtId].numVotes = row.numVotes;
  });

  return [districts, votes];
};

/** POST the vote data to the server side **/
const voteDistrict = ({ districtId, numVotes }) => {
  // fetch th eip first
  let ip = null;

  if (!districtId) {
    throw new Error("districtId is required");
  }

  return fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(response => {
      if (response.ip) {
        ip = response.ip;
      }

      return fetch(API_ENDPOINT + "?action=votes", {
        method: "POST",
        body: JSON.stringify({
          districtId: districtId,
          ip: ip,
          numVotes: numVotes || 1
        })
      }).then(response => response.json());
    })
    .catch(e => {
      // if the ip API was blocked
      console.log("fetch api failed", e);

      return fetch(API_ENDPOINT + "?action=votes", {
        method: "POST",
        body: JSON.stringify({
          districtId: districtId,
          ip: "unknown",
          numVotes: numVotes || 1
        })
      }).then(response => response.json());
    });
};

export default props => {
  const [chosenDistrictId, setChosenDistrictId] = useState(null);

  // fetch restaurants from server side
  const [restaurants, setRestaurants] = useState(null);
  const [districts, setDistricts] = useState(districtsDef);
  useEffect(() => {
    fetch(API_ENDPOINT + "?action=restaurants", {})
      .then(response => response.json())
      .then(response => {
        if (response.status == "OK") {
          let [newDistricts, values] = parseRestaurantResponse(
            districts,
            response.values
          );
          setRestaurants(values);
          setDistricts(Object.assign({}, newDistricts));
        }
      });
  }, []);
  // fetch votes from server side
  useEffect(() => {
    fetch(API_ENDPOINT + "?action=votes", {})
      .then(response => response.json())
      .then(response => {
        console.log("resposne for votes", response);
        if (response.status == "OK") {
          let [newDistricts, votes] = pasrseVotesResponse(
            districts,
            response.votes
          );
          // setRestaurants(values)
          setDistricts(Object.assign({}, newDistricts));
        }
      });
  }, []);

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
            voteDistrict={voteDistrict}
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
