const choices = ["rock", "paper", "scissors"]

const getUserChoice = userInput => {
  if (choices.includes(userInput.toLowerCase()) || userInput.toLowerCase() === 'bomb') {
    return userInput;
  } else {
    console.log('Error! That isn\'t a valid choice.');
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    console.log('user cheated!')
    return 'user'
  } else if (userChoice === computerChoice) {
    return 'tie'
  } else if ((userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'scissors' && computerChoice === 'rock')) {
    return 'cpu';
  } else {
    return 'user';
  }
}

function playGame() {
  userChoice = getUserChoice('scissors');
  computerChoice = getComputerChoice();
  console.log(`user: ${userChoice}, cpu: ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();