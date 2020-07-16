import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import NoteManager from '../components/NoteManager';
import ModalNote from '../components/ModalNotes';
import note2 from '../media/img/note2.png'
import ModalContent from '../components/ModalContent';
import { useHistory } from 'react-router-dom';
import GameOver from '../components/GameOver';


export default function Cabin() {
 let history = useHistory();

  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
 // const [state, setState] = useState('')

  if (performance.navigation.type === 1) {
    GameOver(0, ' You turned around') //refreshed page
  }


  function handleClick() {
    ModalNote();
    NoteManager(history,"cabinNote");
    
  }

  if (foundNotes.includes('cabinNote')) {
        return (
        
        <div className="mainBody">
          <h1>The Cabin</h1>
          <p>
            I decide to take a better look and those paintings. As I get closer, I realize that all those little fancy decorated squares were not pitchers frames but windows surrounding the little<span >cabin… in the woods.</span> </p>
  
          <Navigation
            northEast="/testsite" northEastEvents="auto"
            northCenter="" northCenterEvents="none"
            northWest="/clearing" northWestEvents="auto"
            centerEast="/eastforest" centerEastEvents="auto"
            centerWest="/westforest" centerWestEvents="auto"
            southEast="/toys" southEastEvents="auto"
            southCenter="" southCenterEvents="none"
            southWest="" southWestEvents="none"
  
  
          />
          <ModalContent image={note2} />

        </div>
  
  
      );        
  } else {

    return (
      //cabin needs a few pictures, note is hidden in one.
      <div className="mainBody">
      <h1>The Cabin</h1>
        <p>
          I decide to take a better look and those paintings. As I get closer, I realize that all those little fancy decorated squares were not pitchers frames but windows surrounding the little<span className='glitch' data-text='amet' onClick={handleClick}> amet </span>
           </p>

        <Navigation
          northEast="/testsite" northEastEvents="auto"
          northCenter="" northCenterEvents="none"
          northWest="/clearing" northWestEvents="auto"
          centerEast="/eastforest" centerEastEvents="auto"
          centerWest="/westforest" centerWestEvents="auto"
          southEast="/toys" southEastEvents="auto"
          southCenter="" southCenterEvents="none"
          southWest="" southWestEvents="none"


        />
        <ModalContent image={note2} />
      </div>


    );
  }



}