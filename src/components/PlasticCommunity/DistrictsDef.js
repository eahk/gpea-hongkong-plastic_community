export const districts = {
  Islands: {
    svgId: "Island",
    name: "港島",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Kwai Tsing": {
    svgId: "Kwai_Tsing",
    name: "葵青",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  North: {
    svgId: "Northern",
    name: "北",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Sai Kung": {
    svgId: "Sai_Kung",
    name: "西貢",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  Sha_Tin: {
    svgId: "Sha_Tin",
    name: "沙田",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Tai Po": {
    svgId: "Tai_Po_1_",
    name: "大埔",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Tsuen Wan": {
    svgId: "Tsuen_Wan",
    name: "荃灣",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Tuen Mun": {
    svgId: "Tuen_Mun",
    name: "屯門",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Yuen Long": {
    svgId: "Yuen_Long",
    name: "元朗",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Kowloon City": {
    svgId: "Kowloon_City",
    name: "九龍城",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Kwun Tong": {
    svgId: "Kwun_Tong",
    name: "觀塘",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Sham Shui Po": {
    svgId: "Sham_Shui_Po",
    name: "深水埗",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Wong Tai Sin": {
    svgId: "Wong_Tai_Sin",
    name: "黃大仙",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Yau Tsim Mong": {
    svgId: "Yau_Tsim_Mong",
    name: "油尖旺",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Central & Western": {
    svgId: "Central_Western",
    name: "中西",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  Eastern: {
    svgId: "Eastern",
    name: "東",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  Southern: {
    svgId: "Southern",
    name: "南",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Wan Chai": {
    svgId: "Wan_Chai",
    name: "灣仔",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  }
};

export const districtNameToId = districtName => {
  for (let k in districts) {
    if (districts[k].name === districtName) {
      return k;
    }
  }
};
