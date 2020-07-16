import React from 'react';
import moveOn from './MoveOn';


function NoteManager(history, note) {
  let foundNotes =JSON.parse(sessionStorage.getItem('foundNotes'));
  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
  foundNotes.push(note)
  gameStats.notesFound = gameStats.notesFound + 1;
  sessionStorage.setItem('gameStats', JSON.stringify(gameStats))
  sessionStorage.setItem('foundNotes', JSON.stringify(foundNotes))

  let test = JSON.parse(sessionStorage.getItem('foundNotes'));
  console.log(test)

  if (foundNotes.length === 8) {
    console.log('win')
    moveOn(history, '/win');
  } 
  return(
  <span></span>
  )
}

export default NoteManager;