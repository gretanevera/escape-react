import React from 'react';



function GameWin() {
    let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))


     return (
        <div className='mainBody'>
            <h1>You escaped</h1>
            <h2>You have left your mark...and found all the notes....</h2>

           {/* toDo: show all the notes found */}


        </div>
    );
}

export default GameWin;