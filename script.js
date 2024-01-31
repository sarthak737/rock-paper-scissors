const getComputerChoice = function () {
  const random = Math.trunc(Math.random() * 3) + 1;
  if (random === 1) {
    return "ROCK";
  } else if (random === 2) {
    return "PAPER";
  } else {
    return "Scissors";
  }
};

const playRound = function (playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === computerSelection) {
      return "DRAW!";
    } else if (playerSelection === "paper") {
      return `You Win! Paper beats Rock`;
    } else if (playerSelection === "scissors") {
      return `You Lose! Scissors was destroyed by Rock`;
    }
  } else if (computerSelection === "PAPER") {
    if (playerSelection === computerSelection) {
      return "DRAW!";
    } else if (playerSelection === "ROCK") {
      return `You Lose! Rock was destroyed by Paper`;
    } else if (playerSelection === "SCISSORS") {
      return `You Win! Scissors beats Paper`;
    }
  } else if (computerSelection === "SCISSORS") {
    if (playerSelection === computerSelection) {
      return "DRAW!";
    } else if (playerSelection === "ROCK") {
      return `You Win! Rock beats Scissors`;
    } else if (playerSelection === "PAPER") {
      return `You Lose! Paper was destroyed by Scissors`;
    }
  }
};

const playerSelection = prompt("Enter ROCK, PAPER OR SCISSORS").toUpperCase();
const computerSelection = getComputerChoice().toUpperCase();
console.log(playRound(playerSelection, computerSelection));

const playGame = function () {};
