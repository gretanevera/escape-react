import React from 'react';
import "../styles/modal.css";
import Navigation from "../components/Navigation";
import ModalNote from '../components/ModalNotes';
import note1 from '../media/img/note1.png';
import ModalContent from '../components/ModalContent';

export default function TestSite7() {
    console.log('you enter the cabin... its cold...')
    //this is where things get tested
    return (

        <div className='content-wrappper'>
            welvome to my testing fascility
            <p>Lorem ipsum dolor sit <span onClick={ModalNote}> amet</span>  consectetur, adipisicing elit. Facere architecto beatae accusamus error incidunt, dolorum enim, a commodi, saepe ut aliquam consequuntur hic sapiente porro blanditiis earum vero. Earum, beatae!</p>
           
           





            <Navigation
                northEast = ""
                northCenter = ""
                northWest = ""
                centerEast = ""
                centerWest = ""
                southEast = ""
                southCenter = ""
                southWest = ""
                />


<ModalContent image= {note1}/>

</div>

    );
}