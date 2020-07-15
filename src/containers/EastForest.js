import React from 'react';
import ModalNote from '../components/ModalNotes';
import ModalContent from '../components/ModalContent';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import note4 from '../media/img/note4.png';
import { useHistory } from 'react-router-dom';

function EastForest() {
let history = useHistory();

let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
// const [state, setState] = useState('')

 if (performance.navigation.type === 1) {
   GameOver(0, ' You turned around') //refreshed page
 }



  function handleClick() {
   ModalNote();
   NoteManager(history, "eForestNote");
  // setState('new')
 }


  if (foundNotes.includes('eForestNote')) {
    return (
      <div className='mainBody'>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias cum temporibus facilis reprehenderit cupiditate non sit voluptatem laborum doloremque eos ipsam, <span > amet </span>
natus eum accusamus harum nisi praesentium architecto vero.</p>



          <Navigation
      northEast=""                northEastEvents="none"
      northCenter="/testsite"                   northCenterEvents="auto"
      northWest="/clearing"            northWestEvents="auto"
      centerEast=""                    centerEastEvents="none"
      centerWest="/cabin"          centerWestEvents="auto"
      southEast=""                southEastEvents="none"
      southCenter="/pit"              southCenterEvents="auto"
      southWest="/toys"               southWestEvents="auto"

     
    />

    <ModalContent image={note4}/>
      </div>
  );
  }else{
    return (
      <div className='mainBody'>
          
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, <span className='glitch' data-text='amet' onClick={handleClick}> amet </span>
       debitis inventore atque dolorum aliquam dolore!</p>



          <Navigation
      northEast=""                northEastEvents="none"
      northCenter="/testsite"                   northCenterEvents="auto"
      northWest="/clearing"            northWestEvents="auto"
      centerEast=""                    centerEastEvents="none"
      centerWest="/cabin"          centerWestEvents="auto"
      southEast=""                southEastEvents="none"
      southCenter="/pit"              southCenterEvents="auto"
      southWest="/toys"               southWestEvents="auto"

     
    />

    <ModalContent image={note4}/>
      </div>
  );
  }

    
}

export default EastForest;