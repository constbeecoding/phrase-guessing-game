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

buttonReset.addEventListener('click', () => {
    startOverlay.style.display = "none";
});


//RETURN RANDOM PHRASE FROM ARRAY//
const getRandomPhraseAsArray = arr => {


}

//ADD THE LETTERS OF A STRING TO THE DISPLAY//
const addPhraseToDisplay = arr => {


}

//CHECK IF A LETTER IS IN THE PHRASE//
const checkLetter = button => {

}

//CHECK IF THE GAME HAS BEEN WON OR LOST//
const checkWin = () => {


}

//LISTEN FOR THE START GAME BUTTON TO BE PRESSED//
startButton.addEventListener('click', () => {



});

//LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED//
qwerty.addEventListener('click', e => {


});