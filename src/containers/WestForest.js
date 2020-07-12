import React from 'react';
import Navigation from '../components/Navigation'
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';

function EastForest() {
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
                northEast="/clearing"   northEastEvents="auto"
                northCenter="/thickets" northCenterEvents="auto"
                northWest=""            northWestEvents="none"
                centerEast="/cabin"     centerEastEvents="auto"
                centerWest=""           centerWestEvents="none"
                southEast="/toys"       southEastEvents="auto"
                southCenter=""          southCenterEvents="none"
                southWest=""            southWestEvents="none"


            />


        </div>
    );
}

export default EastForest;