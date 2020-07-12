import React from 'react';
import GameOver from './GameOver';

export default function Timer(notesFound, difficulty) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    let time = (1200000- (60000*notesFound))/(difficulty*2)
    let covTime = time/60000

    console.log('started counting, time is ' +  covTime + " minutes")

    



    const timerEngine = async () => {
        await delay(time*0.3);
        console.log("Waited 5s");
        //could add some effects
        await delay(time*0.7);
        console.log("Waited another 5s");
        GameOver(1, 'you got pooped');
    };
    timerEngine();
}