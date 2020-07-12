import React from 'react';
import Navigation from '../components/Navigation';
import GameOver from '../components/GameOver';

export default function Cabin() {
    console.log('you enter the cabin... its cold...')
//change the background to not glitchy



if (window.performance) {
    //console.info("window.performance works fine on this browser");
  }
    if (performance.navigation.type == 1) {
      GameOver(0, ' You turned around') //refreshed page
    } 
    return(
//cabin needs a few pictures, note is hidden in one.
<div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>




    <Navigation
        northEast="/testsite"                northEastEvents="auto"
        northCenter=""                   northCenterEvents="none"
        northWest="/clearing"            northWestEvents="auto"
        centerEast="/eastforest"                    centerEastEvents="auto"
        centerWest="/westforest"          centerWestEvents="auto"
        southEast="/toys"                southEastEvents="auto"
        southCenter=""              southCenterEvents="none"
        southWest=""               southWestEvents="none"

       
      />
</div>


    );
}