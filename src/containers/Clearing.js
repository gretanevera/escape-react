import React from 'react';
import Navigation from '../components/Navigation'
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import note3 from '../media/img/note3.png';
import ModalNote from '../components/ModalNotes';
import ModalContent from '../components/ModalContent';
import { useHistory } from 'react-router-dom';

export default function Clearing() {
  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
  let history = useHistory();
  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))

  if (performance.navigation.type === 1) {
    GameOver(gameStats.notesFound, ' You were walking in circles', history) //refreshed page
  }



  function handleClick() {
    ModalNote();
    NoteManager(history, "clearingNote");

  }


  if (foundNotes.includes('clearingNote')) {
    return (

      <div className='mainBody'>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span > Facere </span>, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>

        <Navigation
          northEast="" northEastEvents="none"
          northCenter="" northCenterEvents="none"
          northWest="/thickets" northWestEvents="auto"
          centerEast="/testsite" centerEastEvents="auto"
          centerWest="" centerWestEvents="none"
          southEast="/cabin" southEastEvents="auto"
          southCenter="" southCenterEvents="none"
          southWest="/westforest" southWestEvents="auto"

        />

        <ModalContent image={note3} />
      </div>


    );


  } else {
    return (

      <div className='mainBody'>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span className='glitch' data-text='amet' onClick={handleClick}> amet </span>, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>

        <Navigation
          northEast="" northEastEvents="none"
          northCenter="" northCenterEvents="none"
          northWest="/thickets" northWestEvents="auto"
          centerEast="/testsite" centerEastEvents="auto"
          centerWest="" centerWestEvents="none"
          southEast="/cabin" southEastEvents="auto"
          southCenter="" southCenterEvents="none"
          southWest="/westforest" southWestEvents="auto"

        />

        <ModalContent image={note3} />
      </div>


    );
  }




}