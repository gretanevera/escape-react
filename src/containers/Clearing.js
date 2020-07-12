import React from 'react';
import Navigation from '../components/Navigation'

export default function Clearing() {
    console.log('Even though i can see the sky its still dark,s if there is a sheet of fabric covering all of this forest')
//change the background to not glitchy
    return(
//the note is not hidden in the pade, we need to find it in the with the console
<div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>

    <Navigation
        northEast=""                northEastEvents="none"
        northCenter=""                   northCenterEvents="none"
        northWest="/thickets"            northWestEvents="auto"
        centerEast="/testsite"                    centerEastEvents="auto"
        centerWest=""          centerWestEvents="none"
        southEast="/cabin"                southEastEvents="auto"
        southCenter=""              southCenterEvents="none"
        southWest="/westforest"               southWestEvents="auto"
    
      />


</div>


    );
}