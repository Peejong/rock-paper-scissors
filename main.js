(function () {
  const startGame = () => {
    const start_button = document.querySelector(".start-btn");
    const startScene_section = document.querySelector(".main-start");
    const gameScene_section = document.querySelector(".main-game");
    const gameSceneTitle_section = document.querySelector("#header");

    start_button.addEventListener("click", (e) => {
      startScene_section.classList.add("fadeOut");
      gameScene_section.classList.add("fadeIn");
      gameSceneTitle_section.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    const GAME_MOVES = ["rock", "paper", "scissors"];
    const BG_DRAW = "#28465f";
    const BG_WIN = "#72a345";
    const BG_LOSE = "#a32142";
    let numberOfRound = 0;
    let totalOfPlayerWins = 0;
    let totalOfComputerWins = 0;
    const choices_li = document.querySelectorAll(".choice");
    const numberOfRound_p = document.querySelector(".round");
    const roundResult_h = document.querySelector(".result-desc");
    const playerActionBg_figure = document.querySelector(".player-action");
    const computerActionBg_figure = document.querySelector(".computer-action");
    const playerScore_figcaption = document.querySelector(".player-score");
    const computerScore_figcaption = document.querySelector(".computer-score");
    const playerAction_img = document.querySelector(".player-action-icon");
    const computerAction_img = document.querySelector(".computer-action-icon");

    choices_li.forEach((choice) =>
      choice.addEventListener("click", getPlayerAction)
    );

    function getPlayerAction() {
      const action = this.getAttribute("data-choice");
      const INTERVAL_SECONDS = 900;
      this.classList.add("player-choice");
      executeGame(action);
      setTimeout(
        () => this.classList.remove("player-choice"),
        INTERVAL_SECONDS
      );
    }

    function executeGame(playerAction) {
      const playerSelection = playerAction;
      const computerSelection = getComputerAction();

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

        playerActionBg_figure.style.backgroundColor = BG_DRAW;
        computerActionBg_figure.style.backgroundColor = BG_DRAW;
        roundResult_h.innerText = "Draw!";
      }

      function isRoundDraw(playerAction, computerAction) {
        return playerAction === computerAction;
      }

      function displayRoundPlayerWins(playerAction, computerAction) {
        if (!isRoundPlayerWins(playerAction, computerAction)) return;

        const winAction = capitalizeFirstChar(playerAction);

        playerActionBg_figure.style.backgroundColor = BG_WIN;
        computerActionBg_figure.style.backgroundColor = BG_LOSE;
        roundResult_h.innerText = `You win! ${winAction} beats ${computerAction}.`;
        totalOfPlayerWins++;
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

        const winAction = capitalizeFirstChar(computerAction);

        playerActionBg_figure.style.backgroundColor = BG_LOSE;
        computerActionBg_figure.style.backgroundColor = BG_WIN;
        roundResult_h.innerText = `You lose! ${winAction} beats ${playerAction}.`;
        totalOfComputerWins++;
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

      function capitalizeFirstChar(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      function updateScore() {
        playerScore_figcaption.innerText = totalOfPlayerWins;
        computerScore_figcaption.innerText = totalOfComputerWins;
      }

      function displayAction(playerAction, computerAction) {
        playerAction_img.src = `icons/${playerAction}.svg`;
        computerAction_img.src = `icons/${computerAction}.svg`;
      }

      function displayWinner() {
        const gameScene_section = document.querySelector(".main-game");
        const endScene_section = document.querySelector(".main-end");
        const gameWinner_h = document.querySelector(".end-desc");

        if (totalOfPlayerWins == 5) {
          gameScene_section.classList.remove("fadeIn");
          endScene_section.classList.add("fadeIn");

          gameWinner_h.innerText = "You win!";
        }

        if (totalOfComputerWins == 5) {
          gameScene_section.classList.remove("fadeIn");
          endScene_section.classList.add("fadeIn");

          gameWinner_h.innerText = "You lose!";
        }
      }

      displayNumberOfRound();
      displayRoundDraw(playerSelection, computerSelection);
      displayRoundPlayerWins(playerSelection, computerSelection);
      displayRoundComputerWins(playerSelection, computerSelection);
      updateScore();
      displayAction(playerSelection, computerSelection);
      displayWinner();
    }
  };

  const restartGame = () => {
    const restart_button = document.querySelector(".end-btn");

    restart_button.addEventListener("click", (e) => {
      window.location.reload();
    });
  };

  startGame();
  playGame();
  restartGame();
})();
