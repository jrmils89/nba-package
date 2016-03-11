var getGames = require('./nba/games.js');

module.exports = {
  games: getGames
};


// node
// var nba = require('./index.js');
// var allData = null;
// nba.games('20160311', function(err, data) {
//   allData = data
// });