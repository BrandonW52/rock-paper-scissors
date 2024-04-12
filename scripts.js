let computerChoice = "";
let playerChoice = "";
const winners = [];

function getPlayerChoice() {
  const rock = document.querySelector("#rockPlayer");
  rock.addEventListener("click", () => {
    playerChoice = "rock";
  });

  const paper = document.querySelector("#paperPlayer");
  paper.addEventListener("click", () => {
    playerChoice = "paper";
  });

  const scissors = document.querySelector("#scissorsPlayer");
  scissors.addEventListener("click", () => {
    playerChoice = "scissors";
  });
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
  unlock();
  for (i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

document.getElementById("gameControl").addEventListener("click", game);

function unlock() {
  document.getElementById("rockPlayer").disabled = false;
  document.getElementById("rockPlayer").classList.remove("btn-disable");
  document.getElementById("rockPlayer").classList.add("btn-enable");

  document.getElementById("paperPlayer").disabled = false;
  document.getElementById("paperPlayer").classList.remove("btn-disable");
  document.getElementById("paperPlayer").classList.add("btn-enable");

  document.getElementById("scissorsPlayer").disabled = false;
  document.getElementById("scissorsPlayer").classList.remove("btn-disable");
  document.getElementById("scissorsPlayer").classList.add("btn-enable");
}
