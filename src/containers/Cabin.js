import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import ModalNote from '../components/ModalNotes';
import note2 from '../media/img/note2.png'
import ModalContent from '../components/ModalContent';

export default function Cabin() {
  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
  const [state, setState] = useState('')

  if (performance.navigation.type === 1) {
    // GameOver(0, ' You turned around') //refreshed page
  }



  function handleClick() {
    ModalNote();
    NoteManager("cabinNote");
    setState('new')
  }

  if (foundNotes.includes('cabinNote')) {
        return (
        
        <div className="mainBody">
          <p>  As branches cracked behind me I ran faster,</p>
          <p> I ran in without hesitation and slammed the door behind me.</p>
          <p>          I turn around and peaked out of the little hole in the old cabin door to see if that beast was still after me. I was safe… for now anyways. I turned around slowly and stared looking around this old
          piece of art. There was junk everywhere, torn up pillows and broken plates like if someone just junked the place and left.For some reason, it felt like I was being watched…the smell of old rotten wood and fear hit me. It started to get dark and really windy… that didn’t help. I didn’t want to take my chances out there
              in the dark so I decided to stay for the night. I mean, the owner wouldn’t mine right.</p>
          <p>
            Out of the whole cabin was a little wooden bed with no pillow, just an old red blanked that smelled like old people and full of bat poop. With no hesitation I sat down, and then lay. When
                your exhausted you don’t care for anything.</p>
          <p>
            As the old bed cracked, I couldn’t help to wonder all the strange paintings of old people nailed on the wall of this old cabin. As I get closer look, the paintings seemed to be staring back
                  down at me. The paintings looked really real. A couple of paintings reminded me of my grandparents who passed away not too long ago.</p>
          <p>
            I was starting to have Goosebumps. Scared out of my mind I shut my eyes and try to sleep.
            When I woke up the next morning, I wipe my eyes open and realized the door was wide open… I get up and grad the closes thing to a weapon I could find which in this case was a piece of rotten 2x4
                      just chilling on the floor. I started making my way towards the door when it close all by itself making a big loud bang!</p>
          <p>
            “Who was that…? “I said scared out of my mind. I could feel all my bloods rushing up to my head and my heart pounding like there was no tomorrow. All of the sudden I stated to get cold
                      and my hand s got really shaky. Up to the point where I dropped the 2x4 and sat back down on the bed.</p>
          <p>
            “youre dreaming… wake up you dumb sun or a cow! Wake up!!” I yelled again and again but
                            nothing. I took a deep breath and got up then remember about the paintings from last night.</p>
          <p>
            I decide to take a better look and those paintings. As I get closer, I realize that all those little fancy decorated squares were not pitchers frames but windows surrounding the little<span >cabin… in the woods.</span> </p>
  
          <Navigation
            northEast="/testsite" northEastEvents="auto"
            northCenter="" northCenterEvents="none"
            northWest="/clearing" northWestEvents="auto"
            centerEast="/eastforest" centerEastEvents="auto"
            centerWest="/westforest" centerWestEvents="auto"
            southEast="/toys" southEastEvents="auto"
            southCenter="" southCenterEvents="none"
            southWest="" southWestEvents="none"
  
  
          />
          <ModalContent image={note2} />

        </div>
  
  
      );        
  } else {

    return (
      //cabin needs a few pictures, note is hidden in one.
      <div className="mainBody">
        <p>  As branches cracked behind me I ran faster,</p>
        <p> I ran in without hesitation and slammed the door behind me.</p>
        <p>          I turn around and peaked out of the little hole in the old cabin door to see if that beast was still after me. I was safe… for now anyways. I turned around slowly and stared looking around this old
        piece of art. There was junk everywhere, torn up pillows and broken plates like if someone just junked the place and left.For some reason, it felt like I was being watched…the smell of old rotten wood and fear hit me. It started to get dark and really windy… that didn’t help. I didn’t want to take my chances out there
            in the dark so I decided to stay for the night. I mean, the owner wouldn’t mine right.</p>
        <p>
          Out of the whole cabin was a little wooden bed with no pillow, just an old red blanked that smelled like old people and full of bat poop. With no hesitation I sat down, and then lay. When
              your exhausted you don’t care for anything.</p>
        <p>
          As the old bed cracked, I couldn’t help to wonder all the strange paintings of old people nailed on the wall of this old cabin. As I get closer look, the paintings seemed to be staring back
                down at me. The paintings looked really real. A couple of paintings reminded me of my grandparents who passed away not too long ago.</p>
        <p>
          I was starting to have Goosebumps. Scared out of my mind I shut my eyes and try to sleep.
          When I woke up the next morning, I wipe my eyes open and realized the door was wide open… I get up and grad the closes thing to a weapon I could find which in this case was a piece of rotten 2x4
                    just chilling on the floor. I started making my way towards the door when it close all by itself making a big loud bang!</p>
        <p>
          “Who was that…? “I said scared out of my mind. I could feel all my bloods rushing up to my head and my heart pounding like there was no tomorrow. All of the sudden I stated to get cold
                    and my hand s got really shaky. Up to the point where I dropped the 2x4 and sat back down on the bed.</p>
        <p>
          “youre dreaming… wake up you dumb sun or a cow! Wake up!!” I yelled again and again but
                          nothing. I took a deep breath and got up then remember about the paintings from last night.</p>
        <p>
          I decide to take a better look and those paintings. As I get closer, I realize that all those little fancy decorated squares were not pitchers frames but windows surrounding the little<span onClick={handleClick} className='glitch' data-text="cabin… in the woods">cabin… in the woods.</span> </p>

        <Navigation
          northEast="/testsite" northEastEvents="auto"
          northCenter="" northCenterEvents="none"
          northWest="/clearing" northWestEvents="auto"
          centerEast="/eastforest" centerEastEvents="auto"
          centerWest="/westforest" centerWestEvents="auto"
          southEast="/toys" southEastEvents="auto"
          southCenter="" southCenterEvents="none"
          southWest="" southWestEvents="none"


        />
        <ModalContent image={note2} />
      </div>


    );
  }



}