import Timer from './Timer';
import moveOn from './MoveOn';
import { useHistory } from 'react-router-dom';

function NoteManager(note) {
  let history = useHistory
  let foundNotes =JSON.parse(sessionStorage.getItem('foundNotes'));
  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
  foundNotes.push(note)
  gameStats.notesFound = gameStats.notesFound + 1;
  sessionStorage.setItem('gameStats', JSON.stringify(gameStats))
  sessionStorage.setItem('foundNotes', JSON.stringify(foundNotes))
//log the names of found notes

  let test = JSON.parse(sessionStorage.getItem('foundNotes'));
  console.log(test)

  if (foundNotes.length == 8) {
    console.log('win')
    moveOn(history, '/win');
  } 
}

export default NoteManager;