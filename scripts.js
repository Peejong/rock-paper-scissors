const GAME_MOVES = ['rock', 'paper', 'scissors'];
const playerScore = 0;
const computerScore = 0;
const playerSelection = playerPlay();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (isResultDraw (playerSelection, computerSelection)) return "Draw";
  else if(isResultPlayerWins (playerSelection, computerSelection)) return `Player Wins! ${playerSelection} beats ${computerSelection}`;
  else if(isResultComputerWins (playerSelection, computerSelection)) return `Computer Wins! ${playerSelection} beats ${computerSelection}`;
  else return `Error`;
  
}

function isResultDraw (playerSelection, computerSelection) {
  return playerSelection === computerSelection;
}

function isResultPlayerWins (playerSelection, computerSelection) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if(playerSelection === GAME_MOVES[i] && computerSelection === GAME_MOVES[loseConditions(i)]) return true; 
  }
}

function isResultComputerWins (playerSelection, computerSelection) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if(computerSelection === GAME_MOVES[i] && playerSelection === GAME_MOVES[loseConditions(i)]) return true; 
  }
}

function loseConditions(move) {
  if (move == 0) return 2;
  if (move == 1) return 0;
  if (move == 2) return 1;
}

function playerPlay() {
  let playerAction = prompt("Please choose your move. (rock, paper, scissors)");
   
  if(playerAction == null) return;

  while(!isPlayerMoveValid(playerAction)) {
    playerAction = prompt("Wrong move! Choose your move. (rock, paper, scissors)");
  }

  return isPlayerMoveValid(playerAction) ? convertToLowerCase(playerAction) : 'ERROR';
}

function computerPlay() {
  return GAME_MOVES[generateRandomMove()];
}

function isPlayerMoveValid(move) {
    let playerMove = convertToLowerCase(move);

    for(let i = 0; i < GAME_MOVES.length; i++) {
      if (playerMove === GAME_MOVES[i]) return true;
    }

    return false;
}

function convertToLowerCase(word) {
    return word.toLowerCase();
}

function generateRandomMove() {
  return Math.floor(Math.random() * GAME_MOVES.length);
}



  