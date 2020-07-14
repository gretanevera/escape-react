import React from 'react';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import { useHistory } from 'react-router-dom';

export default function ToyPile() {
  let history = useHistory();

    console.log('there is a pile of toys on clearly burnt ground')
         if (window.performance) {
            //console.info("window.performance works fine on this browser");
          }
            if (performance.navigation.type === 1) {
              GameOver(0, ' You turned around') //refreshed page
            } 

//change the background to not glitchy
    return(
//pictures of toys in the forest, the note is hidden in one
<div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>

            <Navigation
        northEast="/eastforest"                northEastEvents="auto"
        northCenter="/testsite"                   northCenterEvents="auto"
        northWest="/cabin"            northWestEvents="auto"
        centerEast=""                    centerEastEvents="none"
        centerWest=""          centerWestEvents="none"
        southEast="/pit"                southEastEvents="auto"
        southCenter=""              southCenterEvents="none"
        southWest=""               southWestEvents="none"

       
      />



    
</div>


    );
}