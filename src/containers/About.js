import React /*, { useEffect } */ from 'react';
import '../styles/typewriter.css';
// import '../styles/about.css'

export default function AboutPage() {
//will probaably change into index file or main nav for the whole game. ppl have to get back to this to navigate the site ON PURPOSE

  console.log('this is where you adventure begins and ends')


  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
  console.log(gameStats)

  return (

    <div className='mainBody'>
      <h1>What are you doing here?</h1>
      <div id='typedTextWrap' >

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus corporis voluptatibus porro optio autem dolore rem a quisquam. Aliquid cum sint neque odio dolorum velit tenetur et voluptatem molestias.</p>
      </div>
    </div>


  );



};