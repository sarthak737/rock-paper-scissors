const getComputerChoice = function () {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.trunc(Math.random() * 3) + 1;
  if (random === 1) {
    return choice[0];
  } else if (random === 2) {
    return choice[1];
  } else {
    return choice[2];
  }
};

let playerScore = 0;
let computerScore = 0;

const play = function (playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (playerSelection === "paper") {
      playerScore++;
      return `You Win! Paper beats Rock!`;
    } else if (playerSelection === "scissors") {
      computerScore++;
      return `You Lose! Rock beats Scissors!`;
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (playerSelection === "rock") {
      computerScore++;
      return `You Lose! Paper beats Rock!`;
    } else if (playerSelection === "scissors") {
      playerScore++;
      return `You Win! Scissors beats Paper!`;
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (playerSelection === "rock") {
      playerScore++;
      return `You Win! Rock beats Scissors!`;
    } else if (playerSelection === "paper") {
      computerScore++;
      return `You Lose! Scissors beats Paper!`;
    }
  }
};

const playGame = function () {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      "Enter Rock, Paper Or Scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(play(playerSelection, computerSelection));
  }
  if (computerScore > playerScore) {
    console.log(`Computer is the Winner with score ${computerScore}`);
  } else {
    console.log(`You are the Winner with score ${playerScore}`);
  }
};

playGame();
