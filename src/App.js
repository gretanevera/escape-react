import React, { useState } from 'react';
import './App.css';
import './styles/glitch.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from './containers/Home';
import AboutPage from './containers/About';
import Cabin from './containers/Cabin';


function App() {

    let bgIwanna = '../media/img/glitchForest.gif';
    let attIWanna = 'no-repeat center center fixed'

    //some global varialbes stored in local/session storage, reset evrytime a new game starts
    return (
        <div className="App" > 
        
            {/* start menu probably will have to move to seperate js */}
            {/* // Route goes here */}
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                {/* random routes? */}

                </Switch>
            </Router>

        </div >
    );
}

export default App;
