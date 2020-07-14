import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

import './App.css';
import "./styles/modal.css";
import "./styles/navigation.css";
import './styles/glitch.css';

import HomePage from './containers/Home';
import Cabin from './containers/Cabin';
import Clearing from './containers/Clearing';
import ScorchedTree from './containers/ScorchedTree';
import ThePit from './containers/ThePit';
import Thickets from './containers/Thickets';
import ToyPile from './containers/ToyPile';
import TestSite7 from './containers/TestSite7';
import EastForest from './containers/EastForest';
import WestForest from './containers/WestForest';
import AboutPage from './containers/About';
import GameEnd from './containers/GameEnd';
import GameWin from './containers/GameWin';
import Background1 from './media/img/glitchForestWithSlendy.gif';
import Background2 from './media/img/forest.jpg';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {

let bgImage=Background2
    
    // let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));

    // if (gameStats == null) {
    //     console.log('new player')
    //     // bgImage = Background2


    // } else {
    //     console.log('returning player')
    //     if (gameStats.gameHasBegun == true) {
    //         // bgImage = Background1
    //         console.log('true')
    //     }
    // }



    var bgConfig = {
        backgroundImage: `url(${bgImage})`,
        backroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    }


    return (
        <div className="App" style={bgConfig}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/testsite" component={TestSite7} />

                    <Route exact path="/cabin" component={Cabin} />
                    <Route exact path="/clearing" component={Clearing} />
                    <Route exact path="/tree" component={ScorchedTree} />
                    <Route exact path="/pit" component={ThePit} />
                    <Route exact path="/thickets" component={Thickets} />
                    <Route exact path="/toys" component={ToyPile} />
                    <Route exact path="/eastforest" component={EastForest} />
                    <Route exact path="/westforest" component={WestForest} />
                    <Route exact path="/over" component={GameEnd} />
                    <Route exact path="/win" component={GameWin} />

                    {/* random routes? */}
                </Switch>
            </Router>

        </div >
    );
}

export default App;
