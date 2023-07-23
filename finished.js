const prompt = require('prompt-sync')();
const c = require('ansi-colors');


const getUserInput = require('./userinput')
const getComputerChoice = require('./computerchoice')
const winner = require('./winner');


let userScore = 0;
let computerScore = 0;

const playOver = () => {
    const choice = prompt('Would you like to play again? either y or n: ')
    return choice === 'y';
}

const playGame = () => {
    let keepPlaying = true;

    while(keepPlaying) {
        console.log(c.bgRedBright(`YOU'RE ABOUT TO PLAY ROCK, PAPER, SCISSORS ...`));

        const userInput = getUserInput();
        const computerInput = getComputerChoice();

        console.log(`You chose ......... ${userInput}`);
        console.log(`The computer chose...... ${computerInput}`);

        const result = winner(userInput, computerInput);

        console.log(result);

        keepPlaying = playOver();
    }

    console.log(c.whiteBright('You have left the game, goodbye.'))
}

playGame();
