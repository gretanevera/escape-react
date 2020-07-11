  // useEffect(() => typeWriter(), []); causes the page to load twice. may cause bugs, hidden for now

  let typedText = 'Now listen closesy, there is not much time...  I know it looks like a game to you, but it is not.  There is danger here.  Not hackers or stupid trolls or jumpscares. There are non of those. The game itself is danger.  There is a way to escape. Thank god it is not just a clickbait title. There are theese notes you need to collect.  Its everywhere! Hidden in invisible divs, in class names, in console, anywhere to make it difficult for you to escape.You have limited time, so be fast!  And for the love of god! Do Not Walk In Circles! ';
  let speed = 60;
  let i = 0;
  //dissabled because use effect reloads the page twice. Used to make a typwritter effect.
  function typeWriter() {
    if (i < typedText.length) {
      document.getElementById("typedTextWrap").innerHTML += typedText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }