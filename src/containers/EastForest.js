import React from 'react';
import Navigation from '../components/Navigation'
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';

function EastForest() {
  NoteManager();
         if (window.performance) {
            //console.info("window.performance works fine on this browser");
          }
            if (performance.navigation.type === 1) {
              GameOver(0, ' You turned around') //refreshed page
            } 

    return (
        <div>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia alias cum temporibus facilis reprehenderit cupiditate non sit voluptatem laborum doloremque eos ipsam, natus eum accusamus harum nisi praesentium architecto vero.</p>



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


        </div>
    );
}

export default EastForest;