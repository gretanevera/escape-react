import React from 'react';
//import moveOn from '../components/MoveOn';
import { Link } from 'react-router-dom';
import HomePage from './Home'
function GameEnd() {
    let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))
let notesFound= gameStats.notesFound;
    return (
        <div className='mainBody'>
            <div className='content-wrapper-game-over'>
            <h1>Game over</h1>
            <h2 className=''>You have collected {notesFound} notes</h2>
            <h2><a class='game-over-text glitch' href='/' data-text='Try again?'> Try again?</a></h2>
            </div>
        </div>
    );
}

export default GameEnd;