import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import ModalNote from '../components/ModalNotes';
import note6 from '../media/img/note6.png';
import ModalContent from '../components/ModalContent';
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import { useHistory } from 'react-router-dom';
import MoveOn from '../components/MoveOn'

export default function TestSite7() {
 let history = useHistory();

  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
  //const [state, setState] = useState('')

  if (performance.navigation.type === 1) {
    GameOver(0, ' You turned around') //refreshed page
  }



   function handleClick() {
    ModalNote();
    NoteManager(history, "testNote");
  //  setState('new')
  }
function handleWin() {
  MoveOn(history, '/win')
}
  if (foundNotes.includes('testNote')) {
    return (
      <div  className='mainBody'>
        Test Facility 7
        <p>Lorem ipsum dolor sit <span > amet </span> consectetur, adipisicing elit. Facere architecto beatae accusamus error incidunt, dolorum enim, a commodi, saepe ut aliquam consequuntur hic sapiente porro blanditiis earum vero. Earum, beatae!</p>

        <h2>we are going to test the win</h2>
          <button onClick={handleWin}>Win</button>
        <Navigation
          northEast="/tree" northEastEvents="auto"
          northCenter="" northCenterEvents="none"
          northWest="/thickets" northWestEvents="auto"
          centerEast="" centerEastEvents="none"
          centerWest="/clearing" centerWestEvents="auto"
          southEast="/eastforest" southEastEvents="auto"
          southCenter="/toys" southCenterEvents="auto"
          southWest="/cabin" southWestEvents="auto"


        />


        <ModalContent image={note6} />

      </div>)


  } else {
    return (

      <div  className='mainBody'>
       <h1> Test Facility 7</h1>

       
        <p>Lorem ipsum dolor sit <span className='glitch' data-text='amet' onClick={handleClick}> amet </span>
            consectetur, adipisicing elit. Facere architecto beatae accusamus error incidunt, dolorum enim, a commodi, saepe ut aliquam consequuntur hic sapiente porro blanditiis earum vero. Earum, beatae!</p>
            <button onClick={handleWin}>Win</button>
      
        <Navigation
          northEast="/tree" northEastEvents="auto"
          northCenter="" northCenterEvents="none"
          northWest="/thickets" northWestEvents="auto"
          centerEast="" centerEastEvents="none"
          centerWest="/clearing" centerWestEvents="auto"
          southEast="/eastforest" southEastEvents="auto"
          southCenter="/toys" southCenterEvents="auto"
          southWest="/cabin" southWestEvents="auto"


        />


        <ModalContent image={note6} />

      </div>

    );
  }

}