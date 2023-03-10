const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const result = document.querySelector('.result');
const button = document.querySelector('.button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const start = document.querySelector('.start');
const game = document.querySelector('.game');
const playerName = document.querySelector('.player-name');
let comment = document.querySelector('.comment');
let playerNameUppercase = '';

let pScore = 0;
let cSCore = 0;

let elemClicked = false;
let eventBound = true;

start.addEventListener("click", (e) => {
  if (playerName.value == "") {
    comment.innerText = "I would like to know your name";
  } else if (isNaN(playerName.value) == false) {
    comment.innerText = "I say your name not your age";
  } else if (playerName.value != "") {
    e.target.style.display = "none";
    playerName.style.display = "none";
    game.style.display = "block";
    comment.style.display = "none";
    playerNameUppercase =
      playerName.value.charAt().toUpperCase() + playerName.value.slice(1);
  }
});

function chooseRock() {
  player.innerText = "Rock";
  elemClicked = true;
}

function choosePaper() {
  player.innerText = "Paper";
  elemClicked = true;
}

function chooseScissors() {
  player.innerText = "Scissors";
  elemClicked = true;
}

rock.addEventListener("click", chooseRock);

paper.addEventListener("click", choosePaper);

scissors.addEventListener("click", chooseScissors);

function computerChoice() {
  return Math.floor(Math.random() * 3);
}

function buttonTrigger() {
  let message = "";

  if (elemClicked) {
    if (computerChoice() == 0) {
      computer.innerText = "Rock";
      elemClicked = false;
    } else if (computerChoice() == 1) {
      computer.innerText = "Paper";
      elemClicked = false;
    } else {
      computer.innerText = "Scissors";
      elemClicked = false;
    }

    if (player.innerText == "Rock" && computer.innerText == "Paper") {
      result.innerText = "Computer win!!!";
      cSCore++;
    } else if (player.innerText == "Rock" && computer.innerText == "Scissors") {
      result.innerText = `Good job ${playerNameUppercase}!!!`;
      pScore++;
    } else if (player.innerText == "Paper" && computer.innerText == "Rock") {
      result.innerText = `Good job ${playerNameUppercase}!!!`;
      pScore++;
    } else if (
      player.innerText == "Paper" &&
      computer.innerText == "Scissors"
    ) {
      result.innerText = "Computer wins!!!";
      cSCore++;
    } else if (player.innerText == "Scissors" && computer.innerText == "Rock") {
      result.innerText = "Computer wins!!!";
      cSCore++;
    } else if (
      player.innerText == "Scissors" &&
      computer.innerText == "Paper"
    ) {
      result.innerText = `Good job ${playerNameUppercase}!!!`;
      pScore++;
    } else {
      result.innerText = "it's a draw!!!";
    }
  }

  if (player.innerText == "Player") {
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
    player.innerText = "Player";
    computer.innerText = "Computer";
    result.innerText = "Result";
    rock.addEventListener("click", chooseRock);
    paper.addEventListener("click", choosePaper);
    scissors.addEventListener("click", chooseScissors);
  }

  button.innerText = message;
  playerScore.innerText = pScore;
  computerScore.innerText = cSCore;
}

button.addEventListener("click", buttonTrigger);
