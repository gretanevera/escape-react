import React, {useEffect} from 'react';

export default function AboutPage() {

    useEffect(() => typeWriter(), []);
    console.log('this is where you appear after you got lost in the woods')
    //change the background to not glitchy


    let typedText = 'Now listen closesy, there is not much time... I know it looks like a game to you, but it is not. There is danger here. Not hackers or stupid trolls or jumpscares. There are non of those. The game itself is danger. There is a way to escape. Thank god it is not just a clickbait title. There are theese notes you need to collect. Its everywhere! Hidden in invisible divs, in class names, in console, anywhere to make it difficult for you to escape.You have limited time, so be fast!  And for the love of god! Do Not Walk In Circles! ';
    let speed = 50;
    let i = 0;


    
    function typeWriter() {
        if (i < typedText.length) {
            console.log('hi ' + i + ' times')
          document.getElementById("typedTextWrap").innerHTML += typedText.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
    
    
    return (

        <div>
            <h1><a href='/cabin'>What are you doing here?</a></h1>
            <p id='typedTextWrap' value='hello'>


              hey


            </p>
        </div>


    );



}



// document.addEventListener( "load", "", console.log('loaded'));

