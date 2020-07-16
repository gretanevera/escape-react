import MoveOn from '../components/MoveOn'
import Timer from './Timer';

export default function NewGame(history) {

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