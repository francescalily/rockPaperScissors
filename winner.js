const prompt = require('prompt-sync')();
const c = require('ansi-colors');


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

module.exports = {
    winner
};

//initial first code
// const winner = (getUserInput, computerChoice) => {
//     let userCount = 0;
//     let computerCount = 0;
// if (getUserInput === computerChoice) {
// return 'It was a draw!'
// }

// if (computerChoice === 'rock' && getUserInput === 'paper') {
//     userCount++;
// return `You won! You now have ${userCount} points`;
// }
// if (computerChoice === 'rock' && getUserInput === 'scissors') {
//     computerCount++;
// return `The computer won! The computer now has ${computerCount} points`;
// }

// if (computerChoice === 'paper' && getUserInput === 'rock') {
//     computerCount++;
//     return `The computer won! The computer now has ${computerCount} points`;
// }

// if (computerChoice === 'paper' && getUserInput === 'scissors') {
//     userCount++;
//     return `You won! You now have ${userCount} points`;
// }

// if (computerChoice === 'scissors' && getUserInput === 'rock') {
//     userCount++;
//     return `You won! You now have ${userCount} points`;
// }

// if (computerChoice === 'scissors' && getUserInput === 'paper') {
//     computerCount++;
//     return `The computer won! The computer now has ${computerCount} points`;
// }
// } 
