import React, { useState, useEffect } from 'react'
import GameOver from './GameOver';


export default class Timer extends React.Component {

  //does not work
  //Todo - make a timer that works
  
    constructor(props) {
      super(props);
      this.state = {
        secondsElapsed: 130 //time in seconds
      };
    }

  
  

  
    getSeconds() {
      return ((this.state.secondsElapsed));
    }
 
    startTime() {
      var _this = this;
      this.countdown = setInterval(function() {
        _this.setState({ secondsElapsed: _this.state.secondsElapsed - 1 });
      }, 1000);
    }
  
    resetTime() {
      this.reset = this.setState({
        secondsElapsed: (this.state.secondsElapsed)
      });
    }
  
    pauseTime() {
      clearInterval(this.countdown);
    }
 
  
    render() {
      return (
        <div className="App">
          <h1>
            {this.getSeconds()}
          </h1>
          <button onClick={() => this.startTime()}>Start</button>
          <button onClick={() => this.pauseTime()}>Pause</button>
          <button onClick={() => this.resetTime()}>Reset</button>
        </div>
      );
    }
  }