import React from 'react';
import './app.php'
import Upload from '../components/Upload';

function GameWin() {
    let highScore= 69

     return (
        <div>
            <h1>Win</h1>
            <h2>Your highscore is {highScore}</h2>
            <form >
            <h2>Enter your name to save the score to the leaderboard</h2>
<input id='name' type="text" name="name" placeholder="Your mark" required autoFocus/>
<input type='number' name='score' value={highScore} disabled/>
<button onClick={handleSumbit}>Leave your mark</button>
            </form>
            <h3>Others that escaped:</h3>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GameWin;