import React from 'react';
import Navigation from '../components/Navigation'

function EastForest() {
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