import React, { useState } from 'react';
import GameOver from './GameOver';

export default function CountDown({seconds = 10 }) {
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [time, setTime] = useState({
      seconds: parseInt(seconds)
    });
  
    const tick = () => {
      if (paused || over) return;
      if (time.seconds == 0) setOver(true);
     else
        setTime({
        seconds: time.seconds - 1
        });
       
    };
  
    const reset = () => {
      setTime({
      seconds: parseInt(seconds)
      });
      setPaused(false);
      setOver(false);
    };
  
    React.useEffect(() => {
      let timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
    if (over === true) {
        GameOver(1, 'you got pooped')
    }
    return (
      <div>
        <p>{`${time.seconds.toString()}`}</p>
        <div>{over ? "Time's up!" : ''}</div>
        <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
        <button onClick={() => reset()}>Restart</button>
      </div>
    );
  }