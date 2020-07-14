import React, {useState} from 'react';
import ModalNote from '../components/ModalNotes';
import ModalContent from '../components/ModalContent';
import note7 from '../media/img/note7.png';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import { useHistory } from 'react-router-dom';

export default function ThePit() {
 // let history = useHistory();

  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
 // const [state, setState] = useState('')

  if (performance.navigation.type === 1) {
    GameOver(0, ' You turned around') //refreshed page
  }



   function handleClick() {
    ModalNote();
    NoteManager("pitNote");
   // setState('new')
  }

  if (foundNotes.includes('pitNote')) {
    return(
      <div>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus  saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>
      
                  <Navigation
              northEast=""                northEastEvents="none"
              northCenter="/eastforest"                   northCenterEvents="auto"
              northWest="/thickets"            northWestEvents="auto"
              centerEast=""                    centerEastEvents="none"
              centerWest=""          centerWestEvents="none"
              southEast=""                southEastEvents="none"
              southCenter=""              southCenterEvents="none"
              southWest=""               southWestEvents="none"
      
             
            />
            <ModalContent image={note7}/>
            </div>
      
      
          );
  }else{
    return(
      <div>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus <span className='glitch' data-text='amet' onClick={handleClick}> amet </span> saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>
      
                  <Navigation
              northEast=""                northEastEvents="none"
              northCenter="/eastforest"                   northCenterEvents="auto"
              northWest="/thickets"            northWestEvents="auto"
              centerEast=""                    centerEastEvents="none"
              centerWest=""          centerWestEvents="none"
              southEast=""                southEastEvents="none"
              southCenter=""              southCenterEvents="none"
              southWest=""               southWestEvents="none"
      
             
            />
            <ModalContent image={note7}/>
            </div>
      
      
          );
  }


    
}