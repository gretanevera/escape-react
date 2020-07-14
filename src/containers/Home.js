import React from 'react';
import NewGame from '../components/NewGame';
import '../styles/main.css';
import { useHistory } from 'react-router-dom';
import MoveOn from '../components/MoveOn';


export default function HomePage() {


    let history = useHistory();
    let foundNotes = ["none",];
    let gameSetUp = {
        "gameDifficulty": 0,
        "notesFound": 0,
        "score": 0,
        "deathClock": 9999,
        "gameHasBegun": false}
    let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))

if (gameStats.gameHasBegun == true) {
  console.log('the game has begun')
}else{
    console.log(foundNotes)
    sessionStorage.setItem('gameStats', JSON.stringify(gameSetUp));
    sessionStorage.setItem('foundNotes', JSON.stringify(foundNotes));
}




    // var gameHasBegun = false;
    // var gameDifficulty   //difficulty 3 levels, blessed/hunted/cursed
    // var notesFound;  //level (in accordance to notes found) probably needs an object to see witch notes are found, so player doesnt use easiest part to get all 8.
    // var deathClock //timers in seconds
    // var score = notesFound * 1000  //score + time left * notesFound

    

    function handleClick() {
        NewGame(history);
    }
    function handleContinue(){
        MoveOn(history, "/about")
    }
    return (
        <div className={'mainBody'}>

            <h1 className="glitch-header" title="Escape it!">Escape!</h1>
            <div className="button-wrapper">
                <button className="menu-button-start glitch" onClick={handleClick} data-text="New Game" >
                    New game</button >
                
                    {gameStats.gameHasBegun == true  &&
        <button className="menu-button-start glitch" onClick={handleContinue} data-text="Continue">
        Continue
        </button>
      }


                <button className="menu-button-start glitch" data-text="Load Game">
                    Load game</button >
            </div>
        </div>

    );
}