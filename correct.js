const prompt = require('prompt-sync')();
const c = require('ansi-colors');


const getUserInput = () => {
    let choice = prompt('Enter either rock, paper or scissors: ');
    while(!['rock', 'paper', 'scissors'].includes(choice)) {
        console.log('Please enter a valid input from either rock, paper or scissors: ');
    }
    return choice;
}

const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }

  let userScore = 0;
  let computerScore = 0;

  function winner (userInput, computerInput) {


    if (userInput === computerInput) {
        console.log(c.bgYellowBright(`It's a draw. No points for either of you:-(`))
    } else if ((userInput === 'rock' && computerInput === 'scissors') || (userInput === 'paper' && computerInput === 'rock') || (userInput === 'scissors' && computerInput === 'paper')) {
      userScore++;
        return (c.green(`You WIN! You now have ${userScore} points`));

  } else {
    computerScore++;
    return (c.red(`The computer won:-(. The computer now has ${computerScore} points`))
    
  }
}

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

    console.log(c.bgWhiteBright('You have left the game, goodbye.'))
}

playGame();
