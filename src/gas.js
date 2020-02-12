// sample data
var restaurantSheetId = "1ixV4uN1VT9vVhFcOBV1rnaC0oAxHbj_rOPQ9HMLZwD0";
// production
// var restaurantSheetId = "1PLSyfCpiupXOHaav5yPoEfvzdoJfnpAtfM9BBbWYLiE"
var votesSheetId = "1IP93G8kfF4B0Lin6e0nEP0Uq6VybHRo-rrKL5lxk86M";

function doGet(e) {
  var params = e.parameter;
  var action = params.action;

  var params = {};

  if (action === "restaurants") {
    return getAllRestaurants(params);
  } else if (action === "votes") {
    return getDistrictVots(params);
  }
}

function doPost(e) {
  var params = e.parameter;
  var action = params.action;

  // var params = {}
  // action = "voteForDistrict"
  // params.districtId = "districtId"

  if (action === "votes") {
    return postDistrictVotes(e);
  }
}

function getAllRestaurants(e) {
  var response = {};

  var SpreadSheet = SpreadsheetApp.openById(restaurantSheetId);
  var sheet = SpreadSheet.getSheetByName("Web_uploaded");

  var numRows = sheet.getLastRow();
  console.log("fetch numRows:", numRows);
  var range = sheet.getRange(1, 1, numRows, 8);
  var values = range.getValues();

  console.log("values.length", values.length);

  response.status = "OK";
  response.values = values;

  return jsonResponse(response);
}

function postDistrictVotes(e) {
  var postData = e.postData ? JSON.parse(e.postData.contents) : {};
  var districtId = postData.districtId;
  var ip = postData.ip || 0;
  var numVots = postData.numVots || 1;

  Logger.log("postData", postData);

  if (numVots > 5) {
    numVots = 5; // max is 5
  }

  if (!districtId) {
    return jsonResponse({
      status: "districtId is required",
      postData: postData,
      params: e.parameter
    });
  }

  var SpreadSheet = SpreadsheetApp.openById(votesSheetId);
  var sheet = SpreadSheet.getSheetByName("logs");

  sheet.appendRow([districtId, ip, numVots]);

  return getDistrictVots();
}

function getDistrictVots(e) {
  var response = {};

  var SpreadSheet = SpreadsheetApp.openById(votesSheetId);
  var sheet = SpreadSheet.getSheetByName("summary");

  var numRows = sheet.getLastRow();
  console.log("fetch numRows:", numRows);
  var range = sheet.getRange(1, 1, numRows, 2);
  var values = range.getValues();

  // convert into {districtId:string, numVotes:int} format
  var votes = [];
  values.shift(); // elimate the title row
  values.forEach(function(row) {
    votes.push({
      districtId: row[0],
      numVotes: row[1]
    });
  });

  response.status = "OK";
  response.votes = votes;

  return jsonResponse(response);
}

function jsonResponse(response) {
  var JSONString = JSON.stringify(response);
  return ContentService.createTextOutput(JSONString).setMimeType(
    ContentService.MimeType.JSON
  );
}
