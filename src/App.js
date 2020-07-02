import React from 'react';
import './App.css';
import './styles/glitch.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";import { HomePage } from './conainers/Home';
import AboutPage from './conainers/About';
import Cabin from './conainers/Cabin';

function App() {
//some global varialbes stored in local/session storage, reset evrytime a new game starts

//difficulty
//level (in accordance to notes found)
//timers
//score 



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
