const prompt = require('prompt-sync')();
const c = require('ansi-colors');


const getUserInput = () => {
    let choice = prompt('Enter either rock, paper or scissors: ');
    while(!['rock', 'paper', 'scissors'].includes(choice)) {
        console.log('Please enter a valid input from either rock, paper or scissors: ');
    }
    return choice;
}

module.exports = { getUserInput };
