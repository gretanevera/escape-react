import React from 'react';
import './App.css';
import './styles/glitch.css';


function App() {
  return (
    <div className="App">
     

    <h1 class="glitch-header" title="Escape it!">Escape!</h1>
        <div class="button-wrapper">
           {/* temp redirect */}
            <a href="pages/about.html" class="menu-button-start glitch" data-text="New Game" onclick="newGame();">
                New game</a>
            <a href="#" class="menu-button-start glitch" onclick="loadGame();" data-text="Load Game">
                Load game</a>
            <a href="#" class="menu-button-start glitch" onclick="help();" data-text="HELP">
                Help
            </a>
            {/* <!-- <a href="#leaderboards" class="menu-button-start" >
                    The ones that escaped
                </a> --> */}
        </div>


    </div>
  );
}

export default App;
