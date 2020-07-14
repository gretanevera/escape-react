import moveOn from './MoveOn';

export default function GameOver(notesFound, causeOfDeath) {
    console.log('Game over. Cause of death: ' + causeOfDeath +'. You have collected ' + notesFound+ 'pages.')
    // moveOn("/over")
}
