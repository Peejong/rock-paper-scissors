// Create a set for "Rock paper, scissors" actions
const GAME_MOVES = ['rock', 'paper', 'scissors'];

// Executes the program
game();

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let numberDraws = 0;

  for (let i = 0; playerWins != 5 && computerWins != 5; i++) {
    
    let player = playerPlay();
    let computer = computerPlay();
    
    if(player == null) return;

    console.log(`Round ${i + 1}: ${playRound(player,computer)}`);

    if (isRoundDraw (player, computer)) ++numberDraws;    
    if (isRoundPlayerWins (player, computer)) ++playerWins;    
    if (isRoundComputerWins (player, computer)) ++computerWins;

    console.log(`Player Score: ${playerWins}\nComputer score: ${computerWins}\nDraw: ${numberDraws}`);
  }
  
  (playerWins > computerWins) ? console.log(`Game Result : Player Wins!`) : console.log(`Game Result : Computer Wins!`);
}


function playRound(playerSelection, computerSelection) {
  if (isRoundDraw (playerSelection, computerSelection)) return 'Draw';
  if (isRoundPlayerWins (playerSelection, computerSelection)) return `Player Wins! ${playerSelection} beats ${computerSelection}`;
  if (isRoundComputerWins (playerSelection, computerSelection)) return `Computer Wins! ${playerSelection} beats ${computerSelection}`;
}

function isRoundDraw (playerSelection, computerSelection) {
  return playerSelection === computerSelection;
}

function isRoundPlayerWins (playerSelection, computerSelection) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if(playerSelection === GAME_MOVES[i] && computerSelection === GAME_MOVES[loseConditions(i)]) return true; 
  }
}

function isRoundComputerWins (playerSelection, computerSelection) {
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if(computerSelection === GAME_MOVES[i] && playerSelection === GAME_MOVES[loseConditions(i)]) return true; 
  }
}

function loseConditions(action) {
  if (action == 0) return 2;
  if (action == 1) return 0;
  if (action == 2) return 1;
}

function playerPlay() {
  let playerAction = inputAction();

  return playerAction;
}

function inputAction() {
  let action = prompt("Please choose your move. (rock, paper, scissors)");

  if(action == null) return;
  
  while(!isPlayerActionValid(action)) {
    action = prompt("Wrong move! Choose your move. (rock, paper, scissors)");
  }
 
  return isPlayerActionValid(action) ? convertToLowerCase(action) : console.error("ERROR");
}

function isPlayerActionValid(action) {
  let playerAction = convertToLowerCase(action);

  for(let i = 0; i < GAME_MOVES.length; i++) {
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