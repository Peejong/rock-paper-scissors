// Create an array for "Rock, paper, scissors" action
const GAME_MOVES = ["rock", "paper", "scissors"];

// Executes game
game();

function game() {
  // Variables for storing scores
  let playerWins = 0;
  let computerWins = 0;
  let numberDraws = 0;

  // Loop the procedure until user or computer has five points
  for (let i = 0; playerWins != 5 && computerWins != 5; i++) {
    // Variables for storing actions
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    // Guard clause for null
    if (playerSelection == null) return;

    // Display output of winner of #th round
    console.log(
      `Round ${i + 1}: ${playRound(playerSelection, computerSelection)}`
    );

    // Check round result for modifying scores
    if (isRoundDraw(playerSelection, computerSelection)) ++numberDraws;
    if (isRoundPlayerWins(playerSelection, computerSelection)) ++playerWins;
    if (isRoundComputerWins(playerSelection, computerSelection)) ++computerWins;

    // Display scoreboard
    console.log(displayScore(playerWins, computerWins, numberDraws));
  }

  // Display winner of the game
  console.log(displayWinner(playerWins, computerWins));
}

function playerPlay() {
  // Display prompt and ask user for input
  let action = prompt("Please choose your move. (rock, paper, scissors)");

  // Guard clause for null
  if (action == null) return;

  // If user inputs wrong action, prompt displays repeatedly until user inputs the correct action
  while (!isPlayerActionValid(action)) {
    action = prompt("Wrong move! Choose your move. (rock, paper, scissors)");
  }

  // If the input is valid, return the input
  if (isPlayerActionValid(action)) return convertToLowerCase(action);
}

function isPlayerActionValid(action) {
  let playerAction = convertToLowerCase(action);

  // Checking the input by using the array
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (playerAction === GAME_MOVES[i]) return true;
  }

  return false;
}

function convertToLowerCase(word) {
  // Convert to lowercase for compatibility
  return word.toLowerCase();
}

function computerPlay() {
  // Return random action using the array
  return GAME_MOVES[generateRandomAction()];
}

function generateRandomAction() {
  return Math.floor(Math.random() * GAME_MOVES.length);
}

function playRound(playerSelection, computerSelection) {
  // Checks the round result for displaying the message
  if (isRoundDraw(playerSelection, computerSelection)) return "Draw";
  if (isRoundPlayerWins(playerSelection, computerSelection))
    return `Player Wins! ${playerSelection} beats ${computerSelection}`;
  if (isRoundComputerWins(playerSelection, computerSelection))
    return `Computer Wins! ${playerSelection} beats ${computerSelection}`;
}

function isRoundDraw(playerSelection, computerSelection) {
  //  Checks if the round result is draw
  return playerSelection === computerSelection;
}

function isRoundPlayerWins(playerSelection, computerSelection) {
  //  Checks if the player wins the round the array
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (
      playerSelection === GAME_MOVES[i] &&
      computerSelection === GAME_MOVES[loseConditions(i)]
    )
      return true;
  }
}

function isRoundComputerWins(playerSelection, computerSelection) {
  //  Checks if the computer wins the round using the array
  for (let i = 0; i < GAME_MOVES.length; i++) {
    if (
      computerSelection === GAME_MOVES[i] &&
      playerSelection === GAME_MOVES[loseConditions(i)]
    )
      return true;
  }
}

function loseConditions(action) {
  // Returning lose condition actions for checking who is the winner of #th round
  if (action == 0) return 2;
  if (action == 1) return 0;
  if (action == 2) return 1;
}

function displayScore(playerWin, computerWin, draw) {
  // Output for scoreboard
  return `Player Score: ${playerWin}\nComputer score: ${computerWin}\nDraw: ${draw}`;
}

function displayWinner(playerScore, computerScore) {
  // Output for winner of the game
  let result;
  playerScore > computerScore
    ? (result = `Game Result : Player Wins!`)
    : (result = `Game Result : Computer Wins!`);
  return result;
}
