var getGames = require('./lib/nba/games.js');
var getPlayers = require('./lib/nba/players.js');

module.exports = {
  games: getGames,
  allPlayers: getPlayers.getAllPlayers,
  nbaPlayer: getPlayers.getNBAPlayer,
  nbadlPlayer: getPlayers.getNBADLPlayer
};