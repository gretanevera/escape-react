import moveOn from './MoveOn';
//import { useHistory } from 'react-router-dom';


export default function GameOver(notesFound, causeOfDeath, history) {

    let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))
    gameStats.COD = causeOfDeath
    sessionStorage.setItem('gameStats', JSON.stringify(gameStats))
    console.log('Game over. Cause of death: ' + causeOfDeath + '. You have collected ' + notesFound + 'pages.')
    moveOn(history, "/over")
}
