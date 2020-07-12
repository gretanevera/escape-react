import React from 'react';
import '../styles/typewriter.css';
import Navigation from '../components/Navigation'


export default function AboutPage() {

  console.log('this is where you adventure begins and ends')

  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
  console.log(gameStats)

  return (

    <div className='mainBody'>
      <h1>What are you doing here?</h1>
      <div id='typedTextWrap' >

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus corporis voluptatibus porro optio autem dolore rem a quisquam. Aliquid cum sint neque odio dolorum velit tenetur et voluptatem molestias.</p>
      </div>


      <Navigation
        northEast="/toys"
        northCenter="/cabin"
        northWest="/westforest"
        centerEast="/thepit"
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