// VARIABLES//

let qwerty = document.getElementById('querty');
let phrase = document.getElementById('phrase');
let buttonReset = document.querySelector('.btn__reset');
let startOverlay = document.getElementById('overlay');
//const hideStart = startOverlay.style.display = "none";

let missed = ('0')

//PHRASES ARRAY//

const phrasesArray = arr => {
    ['Id just as soon kiss a Wookiee'],
    ['Help me ObiWan Kenobi'],
    ['May the force be with you'],
    ['I find your lack of faith distrubing'],
    ['Scruffy looking nerf herder']
};
 console.log(phrasesArray);

//START GAME -- BUTTON FUNCTION//
// function hideStart () {
// if (buttonReset='clicked') {
//     startOverlay.style.display = "none";
// } else {
//     startOverlay.style.display =
// }//utton is clicked then hideStart, else show start Overlay

// }

buttonReset.addEventlistener('click', () => {
    startOverlay.style.display = "none";
)};
//     if (buttonReset= 'clicked') {
//     startOverlay.style.display = "none";
// } else {
//     startOverlay.style.display =
//utton is clicked then hideStart, else show start Overlay);


//RETURN RANDOM PHRASE FROM ARRAY//

//ADD THE LETTERS OF A STRING TO THE DISPLAY//

//CHECK IF A LETTER IS IN THE PHRASE//

//CHECK IF THE GAME HAS BEEN WON OR LOST//

//LISTEN FOR THE START GAME BUTTON TO BE PRESSED//

//LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED//