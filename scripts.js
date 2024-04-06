let computerChoice = "";
let playerChoice = "";

function getPlayerChoice() {
  playerChoice = prompt("Type: Rock, Paper, Scissors");
  while (playerChoice === null) {
    playerChoice = prompt("Type: Rock, Paper, Scissors");
  }

  playerChoice = playerChoice.toLocaleLowerCase();
  let check = validateInput(playerChoice);

  while (check == false) {
    playerChoice = prompt("unexpected item in the baggage area");

    while (playerChoice == null) {
      playerChoice = prompt("Type: Rock, Paper, Scissors");
    }

    playerChoice = playerChoice.toLocaleLowerCase;
    check = validateInput(playerChoice);

    return check;
  }

  // if (check === true) {
  //   getComputerChoice();
  // }
  return playerChoice;
}

function validateInput(choice) {
  if (
    "rock".includes(choice) ||
    "paper".includes(choice) ||
    "scissors".includes(choice)
  ) {
    return true;
  } else {
    return false;
  }
}

function getComputerChoice() {
  num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    computerChoice = "rock";
  } else if (num === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound() {
  getPlayerChoice();
  getComputerChoice();
  console.log(computerChoice);
  const winner = checkWinner(playerChoice, computerChoice);
  console.log(winner);
}

playRound();
