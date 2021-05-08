const GAME_MOVES = ["rock", "paper", "scissors"];
let numberOfRound = 0;
let totalOfPlayerWins = 0;
let totalOfComputerWins = 0;
const choices_li = document.querySelectorAll(".choice");
const numberOfRound_p = document.querySelector(".round");
const roundResult_h = document.querySelector(".result-desc");
const playerScore_figcaption = document.querySelector(".player-score");
const computerScore_figcaption = document.querySelector(".computer-score");

main();

function main() {
  choices_li.forEach((choice) =>
    choice.addEventListener("click", getPlayerAction)
  );
}

function getPlayerAction() {
  const action = this.getAttribute("data-choice");
  const INTERVAL_SECONDS = 900;
  this.classList.add("player-choice");
  checkRoundResult(action);
  setTimeout(() => this.classList.remove("player-choice"), INTERVAL_SECONDS);
}

function checkRoundResult(playerAction) {
  const playerSelection = playerAction;
  const computerSelection = getComputerAction();

  displayNumberOfRound();
  displayRoundDraw(playerSelection, computerSelection);
  displayRoundPlayerWins(playerSelection, computerSelection);
  displayRoundComputerWins(playerSelection, computerSelection);
}

function getComputerAction() {
  return GAME_MOVES[generateRandomAction()];
}

function generateRandomAction() {
  // returns random number from 0 to 2
  return Math.floor(Math.random() * GAME_MOVES.length);
}

function displayNumberOfRound() {
  numberOfRound_p.innerText = `Round: ${++numberOfRound}`;
}

function displayRoundDraw(playerAction, computerAction) {
  if (!isRoundDraw(playerAction, computerAction)) return;

  roundResult_h.innerText = "Draw!";
}

function isRoundDraw(playerAction, computerAction) {
  return playerAction === computerAction;
}

function displayRoundPlayerWins(playerAction, computerAction) {
  if (!isRoundPlayerWins(playerAction, computerAction)) return;

  roundResult_h.innerText = `You win! ${playerAction} beats ${computerAction}.`;
  totalOfPlayerWins++;
  playerScore_figcaption.innerText = totalOfPlayerWins;
}

function isRoundPlayerWins(playerAction, computerAction) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (
      playerAction === GAME_MOVES[i] &&
      computerAction === GAME_MOVES[loseConditions(i)]
    )
      return true;
  }
}

function displayRoundComputerWins(playerAction, computerAction) {
  if (!isRoundComputerWins(playerAction, computerAction)) return;
  roundResult_h.innerText = `You lose! ${computerAction} beats ${playerAction}.`;
  totalOfComputerWins++;
  computerScore_figcaption.innerText = totalOfComputerWins;
}

function isRoundComputerWins(playerAction, computerAction) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (
      computerAction === GAME_MOVES[i] &&
      playerAction === GAME_MOVES[loseConditions(i)]
    )
      return true;
  }
}

function loseConditions(action) {
  //  Returns the lose condition action of player's /computer's selected action
  const ROCK = 0;
  const PAPER = 1;
  const SCISSORS = 2;

  if (action == ROCK) return SCISSORS;
  if (action == PAPER) return ROCK;
  if (action == SCISSORS) return PAPER;
}
