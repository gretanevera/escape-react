import React /*, { useEffect } */ from 'react';
import '../styles/typewriter.css';
// import '../styles/about.css'

export default function AboutPage() {
  // useEffect(() => typeWriter(), []); causes the page to load twice. may cause bugs, hidden for now

  console.log('this is where you appear after you got lost in the woods')
  //change the background to not glitchy
// document.getElementById('App').style.background = "url('../media/img/forest.jpg') no-repeat center center fixed" 
  let typedText = 'Now listen closesy, there is not much time...  I know it looks like a game to you, but it is not.  There is danger here.  Not hackers or stupid trolls or jumpscares. There are non of those. The game itself is danger.  There is a way to escape. Thank god it is not just a clickbait title. There are theese notes you need to collect.  Its everywhere! Hidden in invisible divs, in class names, in console, anywhere to make it difficult for you to escape.You have limited time, so be fast!  And for the love of god! Do Not Walk In Circles! ';
  let speed = 60;
  let i = 0;

  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'));
  console.log(gameStats)

  //dissabled because use effect reloads the page twice. Used to make a typwritter effect.
  function typeWriter() {
    if (i < typedText.length) {
      document.getElementById("typedTextWrap").innerHTML += typedText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


  return (

    <div className='mainBody'>
      <h1>What are you doing here?</h1>
      <div id='typedTextWrap' >

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus corporis voluptatibus porro optio autem dolore rem a quisquam. Aliquid cum sint neque odio dolorum velit tenetur et voluptatem molestias.</p>
      </div>
    </div>


  );



};