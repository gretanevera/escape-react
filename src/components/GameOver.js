import moveOn from './MoveOn';
//import { useHistory } from 'react-router-dom';


export default function GameOver(notesFound, causeOfDeath, history) {
    console.log('Game over. Cause of death: ' + causeOfDeath +'. You have collected ' + notesFound+ 'pages.')
    moveOn(history,"/over")
}
