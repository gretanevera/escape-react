import React from 'react';

export function HomePage() {




    
    return (
        <div className={'mainBody'}>

            <h1 className="glitch-header" title="Escape it!">Escape!</h1>
            <div className="button-wrapper">
                {/* temp redirect */}
                <a href="/about" className="menu-button-start glitch" onClick="newGame();" data-text="New Game" >
                    New game</a>
                <a href="#" className="menu-button-start glitch" onClick="loadGame();" data-text="Load Game">
                    Load game</a>
                <a href="#" className="menu-button-start glitch" onClick="help();" data-text="HELP">
                    Help
                </a>
                {/* <!-- <a href="#leaderboards" className="menu-button-start" >
                    The ones that escaped
                </a> --> */}

            </div>
        </div>
    );
}