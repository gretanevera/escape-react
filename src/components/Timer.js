import GameOver from './GameOver';

export default function Timer(notesFound, difficulty, newNoteFound) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    let time = (480000 - (60000 * notesFound)) / (difficulty * 2)
    let covTime = time / 1000
    console.log(newNoteFound)


    //needs to be changed because i cant kill the async function
    const timerEngine = async () => {
        if (newNoteFound == true) {
            console.log('timer stopped')
            return


        } else {
            console.log('started counting, time is ' + covTime + " seonds")


            //could add some effects
            await delay(time * 0.5);
            console.log("half of the time passed")
            //change bg to glitch with slendy
            await delay(time * 0.3);
            console.log("another third passed of the time passed")

            //add more glitchyness
            await delay(time * 0.2);
            console.log("you dead soon")

            //Maximum interference
            await delay(5000);
            console.log("you deaded")

            //Spook
            // GameOver(1, 'you got pooped');
        }
        
    }
    timerEngine();
}