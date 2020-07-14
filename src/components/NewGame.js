import MoveOn from '../components/MoveOn'

export default function NewGame(history) {
  console.log('new game has begun')
  //new game, ask for name, choose difficulty
  //set new params for global vars according to difficulty
  // route to the about

  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))
  let foundNotes = ["none",];
  gameStats = {
    "gameDifficulty": 1,
    "notesFound": 0,
    "score": 0,
    "deathClock": 9999,
    "gameHasBegun": true
  };

  sessionStorage.setItem('gameStats', JSON.stringify(gameStats))
  sessionStorage.setItem('foundNotes', JSON.stringify(foundNotes))
  MoveOn(history, "/about");


};