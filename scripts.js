const GAME_MOVES = ["rock", "paper", "scissors"];

playGame();

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let numberofDraw = 0;

  for (let i = 0; playerScore != 5 && computerScore != 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    if (playerSelection == null) return;

    displayRoundResult(i, playerSelection, computerSelection);

    if (isRoundDraw(playerSelection, computerSelection)) ++numberofDraw;
    if (isRoundPlayerWins(playerSelection, computerSelection)) ++playerScore;
    if (isRoundComputerWins(playerSelection, computerSelection))
      ++computerScore;

    displayScore(playerScore, computerScore, numberofDraw);
  }

  displayWinner(playerScore, computerScore);
}

function playerPlay() {
  let action = prompt("Please choose your move. (rock, paper, scissors)");

  if (action == null) return;

  while (!isPlayerActionValid(action)) {
    action = prompt("Wrong move! Choose your move. (rock, paper, scissors)");

    if (action == null) return;
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
  // returns random number from 0 to 2
  return Math.floor(Math.random() * GAME_MOVES.length);
}

function displayRoundResult(round, playerSelection, computerSelection) {
  const numberOfRound = ++round;

  if (isRoundDraw(playerSelection, computerSelection))
    console.log(`Round ${numberOfRound}: Draw`);
  if (isRoundPlayerWins(playerSelection, computerSelection))
    console.log(
      `Round ${numberOfRound}: Player Wins! ${playerSelection} beats ${computerSelection}`
    );
  if (isRoundComputerWins(playerSelection, computerSelection))
    console.log(
      `Round ${numberOfRound}: Computer Wins! ${computerSelection} beats ${playerSelection}`
    );
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
  //  Returns the lose condition action of player's /computer's selected action
  if (action == 0) return 2;
  if (action == 1) return 0;
  if (action == 2) return 1;
}

function displayScore(playerWin, computerWin, draw) {
  console.log(
    `Player Score: ${playerWin}\nComputer score: ${computerWin}\nDraw: ${draw}`
  );
}

function displayWinner(playerScore, computerScore) {
  let result;
  playerScore > computerScore
    ? (result = `Game Result : Player Wins!`)
    : (result = `Game Result : Computer Wins!`);
  console.log(result);
}
