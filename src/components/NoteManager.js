import Timer from './Timer';

function NoteManager(newNoteFound) {
    console.log('note manager initiated')
    let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
    console.log(gameStats)
  console.log(gameStats.gameDifficulty)
  Timer(gameStats.notesFound, gameStats.gameDifficulty, newNoteFound)
}

export default NoteManager;