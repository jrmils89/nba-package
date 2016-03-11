var returnJsonJsonP = require('../helpers/jsonp');
var request = require('request');

var getGames = function(date, callback) {
  returnJsonJsonP('http://data.nba.com/jsonp/5s/json/cms/noseason/scoreboard/'+date+'/games.json', function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data.sports_content.games.game);
    }
  });
};

module.exports = getGames;