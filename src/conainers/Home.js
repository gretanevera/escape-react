import React from 'react';
import NewGame from '../components/NewGame'


export function HomePage() {


   
    return (
        <div className={'mainBody'}>

            <h1 className="glitch-header" title="Escape it!">Escape!</h1>
            <div className="button-wrapper">
                {/* temp redirect */}
                <button className="menu-button-start glitch" onClick={NewGame()} data-text="New Game" >
                    New game</button>
                <button className="menu-button-start glitch" data-text="Load Game">
                    Load game</button>
                <button className="menu-button-start glitch"  data-text="HELP">
                    Help
                </button>
                {/* <!-- <a href="#leaderboards" className="menu-button-start" >
                    The ones that escaped
                </a> --> */}

            </div>
        </div>
    );
}