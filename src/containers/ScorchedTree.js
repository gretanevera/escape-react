import React from 'react';
import Navigation from "../components/Navigation";

export default function ScorchedTree() {
    console.log('There is a tree... all scorched, like it was burnt or hit by a lightning')
//change the background to not glitchy
    return(
//visuals, note is on the other side of the tree.
<div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>

                <Navigation
        northEast=""                northEastEvents="none"
        northCenter=""                   northCenterEvents="none"
        northWest=""            northWestEvents="none"
        centerEast=""                    centerEastEvents="none"
        centerWest=""          centerWestEvents="none"
        southEast=""                southEastEvents="none"
        southCenter="/testsite"              southCenterEvents="auto"
        southWest="/clearing"               southWestEvents="auto"

       
      />


</div>


    );
}