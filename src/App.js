import React from 'react';
import './App.css';
import './styles/glitch.css';
import "./styles/modal.css";
import "./styles/navigation.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from './containers/Home';
import AboutPage from './containers/About';
import TestSite7 from './containers/TestSite7'

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
                    <Route exact path="/testSite" component={TestSite7} />



                    TestSite7
                {/* random routes? */}

                </Switch>
            </Router>

        </div >
    );
}

export default App;
