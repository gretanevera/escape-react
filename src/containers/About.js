import React from 'react';
import '../styles/typewriter.css';
import Navigation from '../components/Navigation'


export default function AboutPage() {

 
  return (

    <div className='mainBody'>
      <h1>What are you doing here?</h1>
      <div id='typedTextWrap' >

        <p>You should not be here</p>
        <p>This game is incomplete... and very, VERY wrong</p>
        <p>To finish it you must collect pages like in a real slenderman game. </p>
        <p>If you loose, you loose in real life too </p>
        <p>be carefull...</p>
        <p className='glitch important-text' data-text='the clock is already ticking'>the clock is already ticking</p>
      </div>


      <Navigation
        northEast="/toys"
        northCenter="/cabin"
        northWest="/westforest"
        centerEast="/pit"
        centerWest="#"
        southEast="#"
        southCenter="#"
        southWest="#"

        northWestEvents="auto"
        northCenterEvents="auto"
        northEastEvents="auto"
        centerWestEvents="none"
        centerEastEvents="auto"
        southWestEvents="none"
        southCenterEvents="none"
        southEastEvents="none"



      />
    </div>


  );



};