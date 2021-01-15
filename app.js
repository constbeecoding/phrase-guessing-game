// VARIABLES//

let qwerty = document.getElementById('querty');
let phrase = document.getElementById('phrase');
let buttonReset = document.querySelector('.btn__reset');
let startOverlay = document.getElementById('overlay');

let missed = ('0')

//PHRASES ARRAY//

const phrases = [
    'Id just as soon kiss a Wookiee',
    'Help me ObiWan Kenobi',
    'May the force be with you',
    'I find your lack of faith distrubing',
    'Scruffy looking nerf herder'
];


//START GAME -- BUTTON FUNCTION//

buttonReset.addEventListener('click', () => {
    startOverlay.style.display = "none";
});

//RETURN RANDOM PHRASE FROM ARRAY//

const getRandomPhraseAsArray = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i].split('');
} 

getRandomPhraseAsArray(phrases);

//ADD THE LETTERS OF A STRING TO THE DISPLAY//

function addPhraseToDisplay(arr) {
    for (let i = 0; i < phrases.length; i++) {
       const li = document.createElement("LI");
       const ul = document.getElementById('phrase');
       // li.appendChild();
        ul.appendChild(li);
        if (arr[i] =! '  ') {
           li.classList.add('.letter');
        } else {
            li.classList.add('.space;');
        }
        
    }
}
const randomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);


// //CHECK IF A LETTER IS IN THE PHRASE//

// const checkLetter = button => {

// }

// //CHECK IF THE GAME HAS BEEN WON OR LOST//

// const checkWin = () => {


// }

// //LISTEN FOR THE START GAME BUTTON TO BE PRESSED//

// startButton.addEventListener('click', () => {



// });

// //LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED//

// qwerty.addEventListener('click', e => {


// });