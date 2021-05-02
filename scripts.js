// TODO: make an exeplaination
// Create an array for "Rock, paper, scissors" action
const GAME_MOVES = ["rock", "paper", "scissors"];

// Executes game
game();

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let numberDraws = 0;

  for (let i = 0; playerWins != 5 && computerWins != 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    if (playerSelection == null) return;

    console.log(
      `Round ${i + 1}: ${playRound(playerSelection, computerSelection)}`
    );

    if (isRoundDraw(playerSelection, computerSelection)) ++numberDraws;
    if (isRoundPlayerWins(playerSelection, computerSelection)) ++playerWins;
    if (isRoundComputerWins(playerSelection, computerSelection)) ++computerWins;

    console.log(displayScore(playerWins, computerWins, numberDraws));
  }

  console.log(displayWinner(playerWins, computerWins));
}

function playerPlay() {
  let action = prompt("Please choose your move. (rock, paper, scissors)");

  if (action == null) return;

  while (!isPlayerActionValid(action)) {
    action = prompt("Wrong move! Choose your move. (rock, paper, scissors)");
  }

  if (isPlayerActionValid(action)) return convertToLowerCase(action);
}

function isPlayerActionValid(action) {
  let playerAction = convertToLowerCase(action);

  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (playerAction === GAME_MOVES[i]) return true;
  }

  return false;
}

function convertToLowerCase(word) {
  return word.toLowerCase();
}

function computerPlay() {
  return GAME_MOVES[generateRandomAction()];
}

function generateRandomAction() {
  return Math.floor(Math.random() * GAME_MOVES.length);
}

function playRound(playerSelection, computerSelection) {
  if (isRoundDraw(playerSelection, computerSelection)) return "Draw";
  if (isRoundPlayerWins(playerSelection, computerSelection))
    return `Player Wins! ${playerSelection} beats ${computerSelection}`;
  if (isRoundComputerWins(playerSelection, computerSelection))
    return `Computer Wins! ${playerSelection} beats ${computerSelection}`;
}

function isRoundDraw(playerSelection, computerSelection) {
  return playerSelection === computerSelection;
}

function isRoundPlayerWins(playerSelection, computerSelection) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (
      playerSelection === GAME_MOVES[i] &&
      computerSelection === GAME_MOVES[loseConditions(i)]
    )
      return true;
  }
}

function isRoundComputerWins(playerSelection, computerSelection) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (
      computerSelection === GAME_MOVES[i] &&
      playerSelection === GAME_MOVES[loseConditions(i)]
    )
      return true;
  }
}

function loseConditions(action) {
  if (action == 0) return 2;
  if (action == 1) return 0;
  if (action == 2) return 1;
}

function displayScore(playerWin, computerWin, draw) {
  return `Player Score: ${playerWin}\nComputer score: ${computerWin}\nDraw: ${draw}`;
}

function displayWinner(playerScore, computerScore) {
  let result;
  playerScore > computerScore
    ? (result = `Game Result : Player Wins!`)
    : (result = `Game Result : Computer Wins!`);
  return result;
}
