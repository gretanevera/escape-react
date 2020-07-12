import React from 'react';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';

export default function Thickets() {
    console.log('The forest gets thicker in here, i cant go further')
    
         if (window.performance) {
            //console.info("window.performance works fine on this browser");
          }
            if (performance.navigation.type == 1) {
              GameOver(0, ' You turned around') //refreshed page
            } 

//change the background to not glitchy
    return(
//reach into the thorns, an eye for an eye
<div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>


                <Navigation
        northEast=""                northEastEvents="none"
        northCenter=""                   northCenterEvents="none"
        northWest=""            northWestEvents="none"
        centerEast=""                    centerEastEvents="none"
        centerWest=""          centerWestEvents="none"
        southEast="/clearing"                southEastEvents="auto"
        southCenter="/westforest"              southCenterEvents="auto"
        southWest=""               southWestEvents="none"

       
      />


</div>


    );
}