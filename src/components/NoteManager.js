import Timer from './Timer';
import moveOn from './MoveOn';

function NoteManager(note) {
  let foundNotes =JSON.parse(sessionStorage.getItem('foundNotes'));
  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
  console.log(foundNotes)
  foundNotes.push(note)
  console.log(foundNotes)
  gameStats.notesFound = gameStats.notesFound + 1;
  sessionStorage.setItem('gameStats', JSON.stringify(gameStats))
  sessionStorage.setItem('foundNotes', JSON.stringify(foundNotes))
//log the names of found notes

  let test = JSON.parse(sessionStorage.getItem('foundNotes'));
  console.log(test)

  if (foundNotes.length == 8) {
    console.log('win')
    moveOn('/win');
  } 
}

export default NoteManager;