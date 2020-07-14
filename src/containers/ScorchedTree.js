import React, { useState } from 'react';
import ModalNote from '../components/ModalNotes';
import ModalContent from '../components/ModalContent';
import note5 from '../media/img/note5.png';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import { useHistory } from 'react-router-dom';

export default function ScorchedTree() {

 let history = useHistory();

  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
//  const [state, setState] = useState('')

  if (performance.navigation.type === 1) {
    GameOver(0, ' You turned around') //refreshed page
  }



  function handleClick() {
    ModalNote();
    NoteManager(history, "treeNote");
 //   setState('new')
  }


  if (foundNotes.includes('treeNote')) {
    return (
      <div>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt  eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>
  
        <Navigation
          northEast="" northEastEvents="none"
          northCenter="" northCenterEvents="none"
          northWest="" northWestEvents="none"
          centerEast="" centerEastEvents="none"
          centerWest="" centerWestEvents="none"
          southEast="" southEastEvents="none"
          southCenter="/testsite" southCenterEvents="auto"
          southWest="/clearing" southWestEvents="auto"
  
  
        />
        <ModalContent image={note5}/>
  
      </div>
  
  
    );
  }else{
    return (
      <div>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt <span className='glitch' data-text='amet' onClick={handleClick}> amet </span> eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>
  
        <Navigation
          northEast="" northEastEvents="none"
          northCenter="" northCenterEvents="none"
          northWest="" northWestEvents="none"
          centerEast="" centerEastEvents="none"
          centerWest="" centerWestEvents="none"
          southEast="" southEastEvents="none"
          southCenter="/testsite" southCenterEvents="auto"
          southWest="/clearing" southWestEvents="auto"
  
  
        />
        <ModalContent image={note5}/>
  
      </div>
  
  
    );
  }



  
}