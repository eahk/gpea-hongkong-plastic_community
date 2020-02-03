export const regionGrouping = {
  "Hong Kong Island": [
    "Central and Western",
    "Eastern",
    "Southern",
    "Wan Chai"
  ],
  Kowloon: [
    "Sham Shui Po",
    "Kowloon City",
    "Kwun Tong",
    "Wong Tai Sin",
    "Yau Tsim Mong"
  ],
  "New Territories": [
    "Kwai Tsing",
    "North",
    "Sai Kung",
    "Sha Tin",
    "Tai Po",
    "Tsuen Wan",
    "Tuen Mun",
    "Yuen Long"
  ]
};

export const districts = {
  Islands: {
    region: "New Territories",
    svgId: "Island",
    name: "離島",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Kwai Tsing": {
    region: "New Territories",
    svgId: "Kwai_Tsing",
    name: "葵青",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  North: {
    region: "New Territories",
    svgId: "Northern",
    name: "北",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Sai Kung": {
    region: "New Territories",
    svgId: "Sai_Kung",
    name: "西貢",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  Sha_Tin: {
    region: "New Territories",
    svgId: "Sha_Tin",
    name: "沙田",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Tai Po": {
    region: "New Territories",
    svgId: "Tai_Po_1_",
    name: "大埔",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Tsuen Wan": {
    region: "New Territories",
    svgId: "Tsuen_Wan",
    name: "荃灣",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Tuen Mun": {
    region: "New Territories",
    svgId: "Tuen_Mun",
    name: "屯門",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Yuen Long": {
    region: "New Territories",
    svgId: "Yuen_Long",
    name: "元朗",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Kowloon City": {
    region: "Kowloon",
    svgId: "Kowloon_City",
    name: "九龍城",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Kwun Tong": {
    region: "Kowloon",
    svgId: "Kwun_Tong",
    name: "觀塘",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Sham Shui Po": {
    region: "Kowloon",
    svgId: "Sham_Shui_Po",
    name: "深水埗",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Wong Tai Sin": {
    region: "Kowloon",
    svgId: "Wong_Tai_Sin",
    name: "黃大仙",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Yau Tsim Mong": {
    region: "Kowloon",
    svgId: "Yau_Tsim_Mong",
    name: "油尖旺",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Central & Western": {
    region: "Hong Kong Island",
    svgId: "Central_Western",
    name: "中西",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  Eastern: {
    region: "Hong Kong Island",
    svgId: "Eastern",
    name: "東",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  Southern: {
    region: "Hong Kong Island",
    svgId: "Southern",
    name: "南",
    numVotes: 0,
    numRestaurants: 0,
    restaurants: []
  },
  "Wan Chai": {
    region: "Hong Kong Island",
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
