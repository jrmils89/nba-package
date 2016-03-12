# NBA-Package

### Installation

This package is still heavily in development. However, should anyone wish to make use of this, they can install by running
```
npm install git://github.com/jrmils89/nba-package.git
```

### Disclaimer

This module is heavily dependent on the NBA keeping these endpoints open to the public. I claim no ownership of this data or have any expectation of all these endpoints remaining open forever. This readme is also a work in progress...

### Usage
This is an evolving list, but here are the current endpoints

#### ```games(date, callback)```

```
callback
```
- Takes two params, ```err``` & ```data```

```
date
```
- Date should be queried in string format ```yyyymmdd```

And example of an express route utilizing the games endpoint:

```
var nba = require('nbapackage');
var express = require('express');
var router = express.Router();

router.get('/games', function(req, res) {
  nba.games('20160311', function(err, data) {
    res.json(data);
  });
});

module.exports = router;
```
#### ```allPlayers(callback, leagueId, season, currentSeason)```

```
callback
```
- Takes two params, ```err``` & ```data```

```
leagueId
```
- Defaults to '00' which is NBA, can also pass in '20' which is the NBA D-League

```
leagueId
```
- Expecting a season in format like '2015-16'

```
currentSeason
```
- A ```true``` or ```false``` bool which limits to only players from this season or not

And example of an express route utilizing the games endpoint:
```
router.get('/players', function(req, res) {
  nba.allPlayers(function(err, data) {
    res.json(data);
  }, '00', '2015-16', true)
})
```

#### ```nbaPlayer(playerId, callback)```

```
callback
```
- Takes two params, ```err``` & ```data```

```
playerId
```
- Required param for the NBA's player ID

And example of an express route utilizing the games endpoint:
```
router.get('/players/:id', function(req, res) {
  nba.nbaPlayer(req.params.id, function(err, data) {
    res.json(data);
  });
});
```

#### ```nbadlPlayer(playerId, callback)```

```
callback
```
- Takes two params, ```err``` & ```data```

```
playerId
```
- Required param for the NBA D-League player ID

And example of an express route utilizing the games endpoint:
```
router.get('/nbadlPlayers/:id', function(req, res) {
  nba.nbadlPlayer(req.params.id, function(err, data) {
    res.json(data);
  });
});
```

