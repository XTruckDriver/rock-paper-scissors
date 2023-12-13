let userInput = 'rock';

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error: Must enter either rock, paper, or scissors.');
        return;
    }
}



function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
};



function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') return'The user won!';
        else return 'The computer won!';
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') return 'The user won!';
        else return 'The computer won!';
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'paper')return 'The user won!';
        else return 'The computer won!';
    }
};



function playGame() {
    let userChoice = getUserChoice(userInput);
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};



playGame();
