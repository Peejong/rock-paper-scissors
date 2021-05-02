# Rock Paper Scissors (In development)

The purpose of this project is creating the website that meets the criteria of The Odin Project: Rock paper scissors.

## Overview

This project's function is to implement of classic game "rock paper scissors"

## Understanding the problem

## Pseudocode
`
Create an array for "Rock, paper, scissors" action
Game start
  Create variables for storing scores
    playerWins = 0
    ComputerWins = 0
    numberDraws = 0
  Ask user input the choosen move
    If the user input the wrong action, ask user repeatly until user input the correct action
  Select action from the array randomly by the computer opponent
  Store their action in variable
    playerSelection = user's action
    computerSelection = computer opponent's action
  Round Start
    Get the playerSelection and computerSelection
    Check the playerSelection and computerSelection for displaying the result by using the array
      If the playerSelection === computerSelection,
        display "Round #: Draw"
      If computerSelection = lose condition action of playerSelection,
        display "Round #: Player wins! playerSelection beats computerSelection"   
      If playerSelection = lose condition action of playerSelection,
        display "Round #: Player wins! computerSelection beat playerSelection"
  Round End 
  If round was draw,
    increment numberDraws by 1
    display the scoreboard            
  If player wins the round, 
    increment playerWins by 1
    display the scoreboard             
  If player Computer opponent wins the round, 
    increment ComputerWins by 1
    display the scoreboard
  Repeat the steps until  playerWins or computerWins = 5
  If playerWins == 5,
    Display "Game Result: Player Wins!"
  Else,
  Display "Game Result: Computer Wins!"           
Game end
`