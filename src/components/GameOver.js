import React from 'react';

export default function GameOver(notesFound, causeOfDeath) {
    alert('Game over. Cause of death: ' + causeOfDeath +'. You have collected ' + notesFound+ 'pages.')
}