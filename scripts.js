let computerChoice = "";
let playerChoice = "";
let playerWins = 0;
let computerWins = 0;
let tiesWins = 0;

const playerButtons = ["rockPlayer", "paperPlayer", "scissorsPlayer"];
const computerButtons = ["rockComputer", "paperComputer", "scissorsComputer"];

function game() {
  document.getElementById("gameState").textContent = "Play";
  document.getElementById("gameControl").textContent = "Reset";

  document.getElementById("computerRoundWins").textContent = 0;
  computerWins = 0;

  document.getElementById("playerRoundWins").textContent = 0;
  playerWins = 0;

  document.getElementById("tiesRoundWins").textContent = 0;
  tiesWins = 0;

  playerButtons.forEach((id) => {
    const button = document.getElementById(id);
    button.classList.remove("btn-disable");
    button.classList.add("btn-enable");

    button.classList.remove("btn-active");
    button.classList.add("btn");

    button.disabled = false;
  });

  computerButtons.forEach((id) => {
    const button = document.getElementById(id);
    button.classList.remove("btn-active");
    button.classList.add("btn");
  });
}

document.getElementById("rockPlayer").addEventListener("click", () => {
  playerChoice = "rock";
  getRoundWinner(playerChoice, getComputerChoice());

  playerButtons.forEach((id) => {
    const button = document.getElementById(id);

    button.classList.remove("btn-active");
    button.classList.add("btn");
  });

  const playerRock = document.getElementById("rockPlayer");
  playerRock.classList.remove("btn");
  playerRock.classList.add("btn-active");

  return playerChoice;
});

document.getElementById("paperPlayer").addEventListener("click", () => {
  playerChoice = "paper";
  getRoundWinner(playerChoice, getComputerChoice());

  playerButtons.forEach((id) => {
    const button = document.getElementById(id);

    button.classList.remove("btn-active");
    button.classList.add("btn");
  });

  const playerPaper = document.getElementById("paperPlayer");
  playerPaper.classList.remove("btn");
  playerPaper.classList.add("btn-active");

  return playerChoice;
});

document.getElementById("scissorsPlayer").addEventListener("click", () => {
  playerChoice = "scissors";
  getRoundWinner(playerChoice, getComputerChoice());

  playerButtons.forEach((id) => {
    const button = document.getElementById(id);

    button.classList.remove("btn-active");
    button.classList.add("btn");
  });

  const playerScissors = document.getElementById("scissorsPlayer");
  playerScissors.classList.remove("btn");
  playerScissors.classList.add("btn-active");

  return playerChoice;
});

function getComputerChoice() {
  computerButtons.forEach((id) => {
    const button = document.getElementById(id);
    button.classList.remove("btn-active");
    button.classList.add("btn");
  });

  num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    computerChoice = "rock";
    const computerRock = document.getElementById("rockComputer");
    computerRock.classList.remove("btn");
    computerRock.classList.add("btn-active");
  } else if (num === 2) {
    computerChoice = "paper";
    const computerPaper = document.getElementById("paperComputer");
    computerPaper.classList.remove("btn");
    computerPaper.classList.add("btn-active");
  } else {
    computerChoice = "scissors";
    const computerScissors = document.getElementById("scissorsComputer");
    computerScissors.classList.remove("btn");
    computerScissors.classList.add("btn-active");
  }
  return computerChoice;
}

function getRoundWinner(playerChoice, computerChoice) {
  console.log(`Player Chose: ${playerChoice}`);
  console.log(`Computer Chose: ${computerChoice}`);
  console.log(`--------------------------------`);

  if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    const computerWinElement = document.getElementById("computerRoundWins");
    computerWins = parseInt(computerWinElement.textContent);
    computerWinElement.textContent = computerWins += 1;

    checkGameWinner(computerWins, playerWins);

    return "Computer";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    const playerWinElement = document.getElementById("playerRoundWins");
    playerWins = parseInt(playerWinElement.textContent);
    playerWinElement.textContent = playerWins += 1;

    checkGameWinner(computerWins, playerWins);

    return "Player";
  } else {
    const tiesWinElement = document.getElementById("tiesRoundWins");
    tiesWins = parseInt(tiesWinElement.textContent);
    tiesWinElement.textContent = tiesWins += 1;

    checkGameWinner(computerWins, playerWins);

    return "Tie";
  }
}

function checkGameWinner() {
  console.log(`Computer wins: ${computerWins}`);
  console.log(`Player wins: ${playerWins}`);
  console.log(`--------------------------------`);

  if (computerWins >= 5) {
    document.getElementById("gameState").textContent = "Computer Wins";

    playerButtons.forEach((id) => {
      const button = document.getElementById(id);
      button.classList.remove("btn-enable");
      button.classList.add("btn-disable");
      button.disabled = true;
    });
  } else if (playerWins >= 5) {
    document.getElementById("gameState").textContent = "Player Wins";

    playerButtons.forEach((id) => {
      const button = document.getElementById(id);
      button.classList.remove("btn-enable");
      button.classList.add("btn-disable");
      button.disabled = true;
    });
  }
}

document.getElementById("gameControl").addEventListener("click", game);
