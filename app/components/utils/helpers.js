// Borrowing from 061717 Address-Finder-Solution
console.log("I'm a helper.")
var axios = require("axios");

// NYT authKey
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var helper = {
  runQuery: function(topic, startyear, endyear) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startyear + "&end_date=" + endyear
    console.log("queryURL: " + queryURL);
    return axios.get(queryURL).then(function(response) {

      if (response) {
        return response.data; 
      } else {
        console.log("NO RESULTS");
        return "";
        }
    });
  },
};

module.exports = helper;

