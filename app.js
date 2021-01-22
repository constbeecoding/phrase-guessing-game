// VARIABLES//

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let buttonReset = document.querySelector('.btn__reset');
let startOverlay = document.getElementById('overlay');
let btn = document.getElementById('qwerty').querySelectorAll('button');

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
};
const randomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);


// //CHECK IF A LETTER IS IN THE PHRASE//

function checkLetter(btn) {
    const allLetters = document.getElementsByClassName('letter'); //every letter in a phrase
    let match = null; 

    for (let i = 0; i < allLetters.length; i++) {
            
        if (btn === allLetters[i].textContent) {
            allLetters.classList.add('show');
            //if match, store button text in match variable
            match = allLetters[i].textContent;
        } 
    } 
    return match;
};

// CHECK IF THE GAME HAS BEEN WON OR LOST//

function checkWin() {

    const classLetter = document.getElementsByClassName('letter');
    const classShow =  document.getElementsByClassName('show');

    if (classLetter.length === classShow.length) {
    //add WIN statements
            startOverlay.classList.add('win');
            //add headline text to show person won
            startOverlay.innerHTML = "The force is strong with you!";
            //change display property of overlay to flex
            startOverlay.style.display = ('flex'); 
            //change display property of overlay to flex
    } else if (missed >= 5) {
    //add LOSE Statements
            startOverlay.classList.add('lose');
            //add headline text to show person lost
            startOverlay.innerHTML = "Patience you must have my young Padawan...";
            //change display property of overlay to flex
            startOverlay.style.display = ('flex'); 
            //change display property of overlay to flex
        }
    
};

//LISTEN FOR THE START GAME BUTTON TO BE PRESSED//

// startButton.addEventListener('click', () => {



// });

//LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED//

qwerty.addEventListener('click', e => {
    let btn = e.target;
    btn.classList.add('chosen');

    if (btn.classList.contains('chosen')) {
        btn.disabled = true;
    }
   letterFound = checkLetter(btn);
});

//Use event delgation to listen ONLY to button events from keyboard.
    //when player chooses a letter, add .chosen class to button so
    //the same letter can't be chosen twice. (disabled attribute for button)

    //pass the button to Checkletter func.
    //store the letter returned inside of a variable called letterFound. 
//If done correctly, open the HTML file, click the letters and see them appear in the phrase.

