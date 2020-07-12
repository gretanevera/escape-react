import React, { useState, useEffect } from 'react';
// import "../styles/modal.css";
import Navigation from "../components/Navigation";
import ModalNote from '../components/ModalNotes';
import note1 from '../media/img/note1.png';
import ModalContent from '../components/ModalContent';
import Timer from '../components/Timer';
import GameOver from '../components/GameOver';

export default function TestSite7() {
    console.log('you enter the cabin... its cold...')
    //this is where things get tested
         Timer(8,1);


         if (window.performance) {
            //console.info("window.performance works fine on this browser");
          }
            if (performance.navigation.type == 1) {
              GameOver(0, ' You turned around') //refreshed page
            } 


        return (

        <div className='content-wrappper'>
            Test Facility 7
            <p>Lorem ipsum dolor sit <span onClick={ModalNote}> amet</span>  consectetur, adipisicing elit. Facere architecto beatae accusamus error incidunt, dolorum enim, a commodi, saepe ut aliquam consequuntur hic sapiente porro blanditiis earum vero. Earum, beatae!</p>
           
           <h2>we are going to test the refresh game over</h2>





            <Navigation
        northEast="/tree"                northEastEvents="auto"
        northCenter=""                   northCenterEvents="none"
        northWest="/thickets"            northWestEvents="auto"
        centerEast=""                    centerEastEvents="none"
        centerWest="/clearing"          centerWestEvents="auto"
        southEast="/eastforest"                southEastEvents="auto"
        southCenter="/toys"              southCenterEvents="auto"
        southWest="/cabin"               southWestEvents="auto"

       
      />


<ModalContent image= {note1}/>

</div>

    );
}