var getGames = require('./lib/nba/games.js');
var getPlayers = require('./lib/nba/players.js');

module.exports = {
  games: getGames,
  allPlayers: getPlayers.getAllPlayers,
  nbaPlayer: getPlayers.getNBAPlayer,
  nbadlPlayer: getPlayers.getNBADLPlayer
};


// node
// var nba = require('./index.js');
// var allData = null;
// nba.games('20160311', function(err, data) {
//   allData = data
// });