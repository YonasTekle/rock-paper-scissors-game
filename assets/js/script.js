const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const image = document.querySelectorAll('img');
let choice;
let compChoice;

/**
 * Add event listener to all the buttons
 */


image.forEach(imageClick => imageClick.addEventListener('click', (event) => {
    choice = event.target.id;
    userDisplay.innerHTML = choice
    createCompChoice();
    getResult();
  }));
 
/**
 * Create a random number between 1 and 3 and 
 * set it to rock, paper, or scissor
 */

function createCompChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
      compChoice = 'Rock';
    }
    if (randomNumber === 2) {
      compChoice = 'Scissors';
    }
    if (randomNumber === 3) {
      compChoice = 'Paper';
    }
    computerDisplay.innerHTML = compChoice;
}

