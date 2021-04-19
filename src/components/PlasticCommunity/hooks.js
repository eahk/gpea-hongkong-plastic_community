import { useState, useEffect } from "react";
import { districts as districtsDef, districtNameToId } from "./DistrictsDef";
// Region 區域
// District 地區
/*
const API_ENDPOINT =
  "https://cors-anywhere.small-service.gpeastasia.org/script.google.com/macros/s/AKfycbxQzeRwXhNC6tQnc4Kjd9pJiWAUQPIQI8DRE14JSYwMFgCTOlhn/exec";
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxQzeRwXhNC6tQnc4Kjd9pJiWAUQPIQI8DRE14JSYwMFgCTOlhn/exec";
    */
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwLIFuBYdgsdHNyYyFwtD7coTFYzqBn2xJlwtoU8-_2exVZAwaYZc5hvQ/exec?sheetName=Web_uploaded";
/**
 * hook version api. Note it assume the response is in json format.
 *
 * @see https://reactgo.com/fetch-data-react-hooks/
 * @param url {string} URL to request
 * @param options {object} Options which directly pass into fetch
 * @return {[resposnse, isLoading]}
 */
export const useFetch = (url, options = {}, onError) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!onError) {
    onError = error => {
      console.error(`Fetching from URL ${url} failed. ${error}`);
    };
  }

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        onError(error);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};

/**
 * Fetch the IP of this client
 * @return {[ip, isLoading]}
 */
export const useIp = () => {
  const [ip, setIp] = useState(null);
  const [loading, setLoading] = useState(true);

  const onError = () => {
    setIp("UNKNOWN");
  };
  const [response, isLoading] = useFetch(
    "https://api.ipify.org?format=json",
    {},
    onError
  );

  useEffect(() => {
    setLoading(isLoading);
    if (response && response.ip) {
      setIp(response.ip);
    }
  }, [response]);

  return [ip, loading];
};

/**
 * Conver the server restaurant table into object
 *
 * @param districts {array} DistrictsDef
 * @param values {array} Table directly from the server side google sheet
 * @return {[newDistricts, restaurants]}
 */
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
      herePlasticLevel = row[herePlasticLevelIdx] || "",
      togoPlasticLevel = row[togoPlasticLevelIdx] || "";

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
  // sort districts based on regions and number of restaurants
  const sortedDistricts = Object.entries(districts)
    .sort(([, v1], [, v2]) => +v2 - +v1)
    .sort((a, b) => {
      if (a[1].region === b[1].region) {
        return a[1].numRestaurants > b[1].numRestaurants ? -1 : 1;
      }
      return a[1].region > b[1].region ? 1 : -1;
    })
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  // return [districts, data];
  return [sortedDistricts, data];
};

const pasrseVotesResponse = (districts, votes) => {
  votes.forEach(row => {
    districts[row.districtId].numVotes = row.numVotes;
  });

  return [districts, votes];
};

/**
 * @return [
 * 	districts: [],
 * 	restaurants: [],
 * 	isLoading: bool,
 * 	isActionLoading: {}
 * ]
 *
 * districts[{
 * 	svgId: string,
 *	name: string,
 *	numVotes: int,
 *	numRestaurants: int,
 *	restaurants: [restaurant, ...]
 * }, ...]
 *
 * restaurants [{
 *	name:string,
 *	foodType:string,
 *	regionName:string,
 *	districtName:string,
 *	districtId:string,
 *	address:string,
 *	herePlasticLevel:int,
 *	togoPlasticLevel:int
 * }]
 *
 * isActionLoading {
 * 	fetchingVotes: bool,
 * 	fetchingRestaurants: bool
 * }
 */
export const useDistrictRestaurans = () => {
  const [districts, setDistricts] = useState(districtsDef);
  const [restaurants, setRestaurants] = useState(null);
  const [isActionLoading, setIsActionLoading] = useState({});

  // fetch restaurants from server side
  const [restaurantsResponse, restaurantsIsLoading] = useFetch(API_ENDPOINT);
  useEffect(() => {
    setIsActionLoading({
      ...isActionLoading,
      fetchingRestaurants: restaurantsIsLoading
    });

    if (restaurantsResponse && restaurantsResponse.status === "OK") {
      let [newDistricts, newRestaurants] = parseRestaurantResponse(
        districts,
        restaurantsResponse.values
      );
      setDistricts({ ...newDistricts });
      setRestaurants(newRestaurants);
    }
  }, [restaurantsResponse]);

  // fetch votes from server side
  const [votesResponse, votesIsLoading] = useFetch(
    "https://script.google.com/macros/s/AKfycbxQzeRwXhNC6tQnc4Kjd9pJiWAUQPIQI8DRE14JSYwMFgCTOlhn/exec" +
      "?action=votes"
  );
  useEffect(() => {
    setIsActionLoading({ ...isActionLoading, fetchingVotes: votesIsLoading });

    if (votesResponse && votesResponse.status === "OK") {
      let [newDistricts] = pasrseVotesResponse(districts, votesResponse.votes);
      setDistricts({ ...newDistricts });
    }
  }, [votesResponse]);

  return [districts, restaurants, isActionLoading];
};

/**
 * Handle vote actions.
 *
 * Usage:
 * ```
 * const [hasVoted, doVote] = useVote()
 * doVote(districtId, {numVotes, onSucc, onError})
 * ````
 *
 * @return {[hasVoted, doVote]} Note hasVoted fresh every minutes.
 */
export const useVote = () => {
  let lastVoteAt = parseInt(localStorage.getItem("lastVoteAt") || 0);
  const [hasVoted, setHasVoted] = useState(
    new Date() - lastVoteAt < 1 * 60 * 1000
  ); // 每 n 分鐘可以投票一次
  const [ip] = useIp();

  const doVote = (districtId, { numVotes, onSucc, onError }) => {
    return fetch(API_ENDPOINT + "?action=votes", {
      method: "POST",
      body: JSON.stringify({
        districtId: districtId,
        ip: ip,
        numVotes: numVotes || 1
      })
    })
      .then(response => response.json())
      .then(response => {
        setHasVoted(true);
        localStorage.setItem("lastVoteAt", new Date().getTime());
        if (onSucc) {
          onSucc(response);
        }
      })
      .catch(error => {
        if (onError) {
          onError(error);
        }
      });
  };

  return [hasVoted, doVote];
};
