import React from 'react';
import '../styles/typewriter.css';
import Navigation from '../components/Navigation'
import NoteManager from '../components/NoteManager';


export default function AboutPage() {

  console.log('this is where you adventure begins and ends')

  NoteManager();

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