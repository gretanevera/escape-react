import React from 'react';

function GameWin() {

   let highScore= 69
    return (
        <div>
            <h1>Win</h1>
            <h2>Your highscore is {highScore}</h2>
            <h3>Others that escaped:</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </table>
        </div>
    );
}

export default GameWin;