const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 45
      },
      {
        firstName: 'Ron',
        lastName: 'Whittaker',
        age: 72
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Jets',
        teamPoints: 75,
        opponentPoints: 36
      },
      {
        opponent: 'Titans',
        teamPoints: 87,
        opponentPoints: 53
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let newGame = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(newGame);
    },
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Falcons', 80, 75);
  team.addGame('Eagles', 85, 45);
  team.addGame('Rams', 75, 58);
  
  console.log(team.players);
  console.log(team.games);  