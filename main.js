const triggerButtonAnimation = () => {
  const start_button = document.querySelector(".start-btn");
  const startScene_section = document.querySelector(".main-start");
  const gameSceneHeading_header = document.querySelector("#header");
  const gameScene_section = document.querySelector(".main-game");
  const restart_button = document.querySelector(".end-btn");

  const triggerAnimationStartGame = () => {
    start_button.addEventListener("click", (e) => {
      startScene_section.classList.add("hidden");
      gameScene_section.classList.remove("hidden");
      gameSceneHeading_header.classList.remove("hidden");
    });
  };

  const triggerAnimationRestartGame = () => {
    restart_button.addEventListener("click", (e) => {
      window.location.reload();
    });
  };

  triggerAnimationStartGame();
  triggerAnimationRestartGame();
};

const playGame = () => {
  const GAME_MOVES = ["rock", "paper", "scissors"];
  let numberOfRound = 0;
  let totalOfPlayerWins = 0;
  let totalOfComputerWins = 0;

  const triggerGetPlayerChoiceAction = () => {
    const choices_li = document.querySelectorAll(".choice");

    choices_li.forEach((choice) =>
      choice.addEventListener("click", getPlayerAction)
    );
  };

  const triggerAnimationPlayerChoiceAction = (element) => {
    const INTERVAL_SECONDS = 500;
    element.classList.add("player-choice");
    setTimeout(
      () => element.classList.remove("player-choice"),
      INTERVAL_SECONDS
    );
  };

  function getPlayerAction() {
    const action = this.getAttribute("data-choice");
    triggerAnimationPlayerChoiceAction(this);
    playGameRounds(action);
  }

  const getComputerAction = () =>
    //Random generate action using GAME_MOVES
    GAME_MOVES[Math.floor(Math.random() * GAME_MOVES.length)];

  function playGameRounds(playerAction) {
    const computerAction = getComputerAction();
    const BG_DRAW = "#28465f";
    const BG_WIN = "#72a345";
    const BG_LOSE = "#a32142";
    const playerActionBg_figure = document.querySelector(".player-action");
    const computerActionBg_figure = document.querySelector(".computer-action");
    const roundResult_h = document.querySelector(".result-desc");

    showNumberOfRound();
    showRoundActions(playerAction, computerAction);
    showRoundResultDraw(playerAction, computerAction);
    showRoundResultPlayerWins(playerAction, computerAction);
    showRoundResultComputerWins(playerAction, computerAction);
    showGameResult();

    function showNumberOfRound() {
      const numberOfRound_p = document.querySelector(".round");
      numberOfRound_p.innerText = `Round: ${++numberOfRound}`;
    }

    function showRoundActions(playerAction, computerAction) {
      const playerAction_img = document.querySelector(".player-action-icon");
      const computerAction_img = document.querySelector(
        ".computer-action-icon"
      );

      playerAction_img.src = `icons/${playerAction}.svg`;
      computerAction_img.src = `icons/${computerAction}.svg`;
    }

    function showRoundResultDraw(playerAction, computerAction) {
      if (!isRoundResultDraw(playerAction, computerAction)) return;

      playerActionBg_figure.style.backgroundColor = BG_DRAW;
      computerActionBg_figure.style.backgroundColor = BG_DRAW;
      roundResult_h.innerText = "Draw!";
    }

    function isRoundResultDraw(playerAction, computerAction) {
      return playerAction === computerAction;
    }

    function showRoundResultPlayerWins(playerAction, computerAction) {
      if (!isRoundResultPlayerWins(playerAction, computerAction)) return;

      const playerActionCapitalize = capitalizeFirstChar(playerAction);

      updatePlayerScore();
      playerActionBg_figure.style.backgroundColor = BG_WIN;
      computerActionBg_figure.style.backgroundColor = BG_LOSE;
      roundResult_h.innerText = `You win! ${playerActionCapitalize} beats ${computerAction}.`;
    }

    function isRoundResultPlayerWins(playerAction, computerAction) {
      for (let i = 0; i < GAME_MOVES.length; i++) {
        if (
          playerAction === GAME_MOVES[i] &&
          computerAction === GAME_MOVES[generateloseConditionActions(i)]
        )
          return true;
      }
    }

    function showRoundResultComputerWins(playerAction, computerAction) {
      if (!isRoundResultComputerWins(playerAction, computerAction)) return;

      const computerActionCapitalize = capitalizeFirstChar(computerAction);

      updateComputerScore();
      playerActionBg_figure.style.backgroundColor = BG_LOSE;
      computerActionBg_figure.style.backgroundColor = BG_WIN;
      roundResult_h.innerText = `You lose! ${computerActionCapitalize} beats ${playerAction}.`;
    }

    function isRoundResultComputerWins(playerAction, computerAction) {
      for (let i = 0; i < GAME_MOVES.length; i++) {
        if (
          computerAction === GAME_MOVES[i] &&
          playerAction === GAME_MOVES[generateloseConditionActions(i)]
        )
          return true;
      }
    }

    function generateloseConditionActions(action) {
      //  Returns the lose condition action of player's /computer's choice action
      const ROCK = 0;
      const PAPER = 1;
      const SCISSORS = 2;

      if (action == ROCK) return SCISSORS;
      if (action == PAPER) return ROCK;
      if (action == SCISSORS) return PAPER;
    }

    function capitalizeFirstChar(word) {
      const resultWord = word.charAt(0).toUpperCase() + word.slice(1);
      return resultWord;
    }

    function updatePlayerScore() {
      const playerScore_figcaption = document.querySelector(".player-score");
      totalOfPlayerWins++;
      playerScore_figcaption.innerText = totalOfPlayerWins;
    }

    function updateComputerScore() {
      const computerScore_figcaption =
        document.querySelector(".computer-score");
      totalOfComputerWins++;
      computerScore_figcaption.innerText = totalOfComputerWins;
    }

    function showGameResult() {
      const gameScene_section = document.querySelector(".main-game");
      const endScene_section = document.querySelector(".main-end");
      const gameWinner_h = document.querySelector(".end-desc");

      showGameEndScene();
      showGameWinner();

      function showGameEndScene() {
        if (totalOfPlayerWins === 5 || totalOfComputerWins === 5) {
          gameScene_section.classList.add("hidden");
          endScene_section.classList.remove("hidden");
        }
      }

      function showGameWinner() {
        if (totalOfPlayerWins === 5) gameWinner_h.innerText = "You win!";
        if (totalOfComputerWins === 5) gameWinner_h.innerText = "Computer win!";
      }
    }
  }

  triggerGetPlayerChoiceAction();
};

triggerButtonAnimation();
playGame();
