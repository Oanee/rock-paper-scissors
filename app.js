let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let result = document.querySelector(".result");
let button = document.querySelector(".button");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

pScore = 0;
cSCore = 0;

let elemClicked = false;
let eventBound = true;

function chooseRock() {
  player.textContent = "Rock";
  elemClicked = true;
}

function choosePaper() {
  player.textContent = "Paper";
  elemClicked = true;
}

function chooseScissors() {
  player.textContent = "Scissors";
  elemClicked = true;
}

rock.addEventListener("click", chooseRock);

paper.addEventListener("click", choosePaper);

scissors.addEventListener("click", chooseScissors);

function computerChoise() {
  return Math.floor(Math.random() * 3 + 1);
}

function buttonTrigger() {
  let message = "";

  if (elemClicked) {
    if (computerChoise() == 1) {
      computer.textContent = "Rock";
      elemClicked = false;
    } else if (computerChoise() == 2) {
      computer.textContent = "Paper";
      elemClicked = false;
    } else {
      computer.textContent = "Scissors";
      elemClicked = false;
    }

    if (player.textContent == "Rock" && computer.textContent == "Paper") {
      result.textContent = "Computer win!!!";
      cSCore++;
    } else if (
      player.textContent == "Rock" &&
      computer.textContent == "Scissors"
    ) {
      result.textContent = "You win!!!";
      pScore++;
    } else if (
      player.textContent == "Paper" &&
      computer.textContent == "Rock"
    ) {
      result.textContent = "You win!!!";
      pScore++;
    } else if (
      player.textContent == "Paper" &&
      computer.textContent == "Scissors"
    ) {
      result.textContent = "Computer wins!!!";
      cSCore++;
    } else if (
      player.textContent == "Scissors" &&
      computer.textContent == "Rock"
    ) {
      result.textContent = "Computer wins!!!";
      cSCore++;
    } else if (
      player.textContent == "Scissors" &&
      computer.textContent == "Paper"
    ) {
      result.textContent = "You win!!!";
      pScore++;
    } else {
      result.textContent = "it's a draw!!!";
    }
  }

  if (player.textContent == "Player") {
    eventBound = false;
  }

  if (eventBound) {
    eventBound = false;
    message = "Try again";
    rock.removeEventListener("click", chooseRock);
    paper.removeEventListener("click", choosePaper);
    scissors.removeEventListener("click", chooseScissors);
  } else if (eventBound == false) {
    eventBound = true;
    message = "Submit";
    player.textContent = "Player";
    computer.textContent = "Computer";
    result.textContent = "Result";
    rock.addEventListener("click", chooseRock);
    paper.addEventListener("click", choosePaper);
    scissors.addEventListener("click", chooseScissors);
  }

  button.textContent = message;
  playerScore.textContent = pScore;
  computerScore.textContent = cSCore;
}

button.addEventListener("click", buttonTrigger);
