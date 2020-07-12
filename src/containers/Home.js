import React from 'react';
import NewGame from '../components/NewGame';
import '../styles/main.css';




export default function HomePage() {

    let foundNotes =["none",];

    // var gameHasBegun = false;
    // var gameDifficulty   //difficulty 3 levels, blessed/hunted/cursed
    // var notesFound;  //level (in accordance to notes found) probably needs an object to see witch notes are found, so player doesnt use easiest part to get all 8.
    // var deathClock //timers in seconds
    // var score = notesFound * 1000  //score + time left * notesFound

    let gameSetUp = {
        "gameDifficulty" : 0, 
        "notesFound": 0, 
        "score": 0, 
        "deathClock" : 9999, 
        "gameHasBegun" : false}

console.log(foundNotes)
sessionStorage.setItem('gameStats', JSON.stringify(gameSetUp));
sessionStorage.setItem('foundNotes', JSON.stringify(foundNotes));




    return (
        <div className={'mainBody'}>

            <h1 className="glitch-header" title="Escape it!">Escape!</h1>
            <div className="button-wrapper">
                {/* temp redirect */}
                <button className="menu-button-start glitch" onClick={NewGame} data-text="New Game" >
                    New game</button >
                <button className="menu-button-start glitch" data-text="Load Game">
                    Load game</button >



            </div>
        </div>

    );
}