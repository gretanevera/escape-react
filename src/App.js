import React from 'react';
import './App.css';
import './styles/glitch.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from './conainers/Home';
import AboutPage from './conainers/About';
import Cabin from './conainers/Cabin';

function App() {
    //some global varialbes stored in local/session storage, reset evrytime a new game starts
var gameHasBegun = false;
    var gameDifficulty   //difficulty 3 levels, blessed/hunted/cursed
    var notesFound;  //level (in accordance to notes found) probably needs an object to see witch notes are found, so player doesnt use easiest part to get all 8.
    var deathClock //timers in seconds
    var score = notesFound * 1000  //score + time left * notesFound

let gameSetUp = [gameDifficulty, notesFound, score, deathClock, gameHasBegun]
sessionStorage.setItem('gameStats', gameSetUp)
let test =sessionStorage.getItem('gameStats')
console.log(gameSetUp + 'og');
console.log(test + 'not og');

    return (
        <div className="App">

            {/* start menu probably will have to move to seperate js */}
            {/* // Route goes here */}
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/cabin" component={Cabin} />

                </Switch>
            </Router>

        </div >
    );
}

export default App;
