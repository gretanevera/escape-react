import React from 'react';
//import moveOn from '../components/MoveOn';
function GameEnd() {
    let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))
    let notesFound = gameStats.notesFound;
    gameStats.gameHasBegun = false;
    sessionStorage.setItem('gameStats', JSON.stringify(gameStats))

    return (
        <div className='mainBody'>
            <div className='content-wrapper-game-over'>
                <h1 className='glitchOg' data-text='Game over'>Game over</h1>
                <h2 className='important-text'>Cause of death:  </h2>
                <h2 >{gameStats.COD}  </h2>
                <h2 >You have collected {notesFound} notes</h2>
                <h2><a className='game-over-text glitch' href='/' data-text='Try again?'> Try again?</a></h2>
            </div>
        </div>
    );
}

export default GameEnd;