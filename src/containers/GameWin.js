import React, { useState } from 'react';
import note1 from '../media/img/note1.png'
import note2 from '../media/img/note2.png'
import note3 from '../media/img/note3.png'
import note4 from '../media/img/note4.png'
import note5 from '../media/img/note5.png'
import note6 from '../media/img/note6.png'
import note7 from '../media/img/note7.png'
import note8 from '../media/img/note8.png'
import ModalNote from '../components/ModalNotes';
import ModalGalery from '../components/ModalGallery';



function GameWin() {
    const [notes, setNotes] = useState('')

    function handleClick(e) {
        setNotes(e.target.getAttribute('src'));
        ModalNote();
    }
    return (
        <div className='mainBody'>
            <h1>You escaped</h1>
            <h2>You have left your mark...and found all the notes....</h2>


            {/* toDo: show all the notes found */}
            <div className='mini-galery-wrap'>
                <img onClick={handleClick} src={note1} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note2} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note3} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note4} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note5} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note6} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note7} alt='Another Page you have found' title='the page'></img>
                <img onClick={handleClick} src={note8} alt='Another Page you have found' title='the page'></img>

            </div>
            <h2><a className='game-over-text glitch' href='/' data-text='Try again?'> Try again?</a></h2>
            <ModalGalery image={notes} />

        </div>
    );
}

export default GameWin;