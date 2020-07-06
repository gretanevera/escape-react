import React from 'react';
import moveOn from '../components/MoveOn'

export default function NewGame() {
   
    console.log('new game has begun')
    //new game, ask for name, choose difficulty
    //set new params for global vars according to difficulty
    // route to the about
    let gameStats = JSON.parse( sessionStorage.getItem('gameStats'))
    // console.log(gameStats + "original");

    console.log(gameStats);


    gameStats = {
        "gameDifficulty" : 1, 
        "notesFound": 0, 
        "score": 0, 
        "deathClock" : 9999, 
        "gameHasBegun" : true}
    sessionStorage.setItem('gameStats', JSON.stringify(gameStats))

    let test =JSON.parse( sessionStorage.getItem('gameStats'));

    console.log(test);

  moveOn("/about");

};