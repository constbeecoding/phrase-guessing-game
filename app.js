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
    let i = Math.floor(Math.random() * arr.length); //random array is returned.
    return arr[i].split(''); //each letter and space in array is "split"
} 

getRandomPhraseAsArray(phrases);

//ADD THE LETTERS OF A STRING TO THE DISPLAY//

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("LI");
        let ul = document.querySelector('ul');

        li.textContent = arr[i];
        ul.appendChild(li);
        
        if (arr[i] != ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }  
    }
}
const randomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);


// //CHECK IF A LETTER IS IN THE PHRASE//

const checkLetter = button => {
    const allLi = document.gete

}

// //CHECK IF THE GAME HAS BEEN WON OR LOST//

// const checkWin = () => {


// }

// //LISTEN FOR THE START GAME BUTTON TO BE PRESSED//

// startButton.addEventListener('click', () => {



// });

// //LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED//

// qwerty.addEventListener('click', e => {


// });