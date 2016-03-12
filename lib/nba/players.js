var returnJsonJsonP = require('../helpers/jsonp');
var request = require('request');

var getAllPlayers = function(callback, leagueId, season, currentSeasonBool) {
  // Defaults to NBA which is league ID of '00'. You can also retrive league ID '20' which
  // is the NBA D-League
  var league = leagueId || '00' ;

  // Set the default date range. In August it rolls to the next calendar year
  var date = new Date(Date.now());
  var year = date.getFullYear();
  if (date.getMonth() >= 7) {
    year += 1;
  };

  // Set the format of the season that the NBA URL is expecting. It expects at '2015-16' format
  var seasonSearch = season || (year-1)+ '-' + year.toString().substr(2,2);
  var thisSeason = currentSeasonBool || false;
  var currentSeason = thisSeason ? 1 : 0;

  returnJsonJsonP('http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason='+currentSeason+'&LeagueID='+league+'&Season='+seasonSearch, function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data.resultSets);
    }
  });
};

var getNBAPlayer = function(playerId, callback) {

  returnJsonJsonP('http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID='+playerId, function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data.resultSets);
    }
  });
};

var getNBADLPlayer = function(playerId, callback) {

  returnJsonJsonP('http://stats.nba.com/stats/commonplayerinfo?LeagueID=20&PlayerID='+playerId, function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data.resultSets);
    }
  });
};

module.exports = {
  getAllPlayers: getAllPlayers,
  getNBAPlayer: getNBAPlayer,
  getNBADLPlayer: getNBADLPlayer
};