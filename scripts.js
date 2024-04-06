let computerChoice = "";
let playerChoice = "";
const winners = [];

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
  if (
    (choiceC === "rock" && choiceP === "scissors") ||
    (choiceC === "paper" && choiceP === "rock") ||
    (choiceC === "scissors" && choiceP === "paper")
  ) {
    return "Computer";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Tie";
  }
}

function playRound(round) {
  getPlayerChoice();
  getComputerChoice();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  logRounds(playerChoice, computerChoice, winner, round);
}

function logRounds(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  if (winner === "Player") {
    console.log("Player Wins");
  } else if (winner === "Computer") {
    console.log("Computer Wins");
  } else {
    console.log("Tie");
  }
  console.log("----------------------------------");
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;

  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties:", ties);
}

function game() {
  for (i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

game();
