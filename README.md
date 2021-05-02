# Rock Paper Scissors (In development)

The purpose of this project is creating the website that meets the criteria of The Odin Project: Rock paper scissors.

## Overview

This project's function is to implement of classic game "rock paper scissors"

## Understanding the problem

## Pseudocode
Create an array for "Rock, paper, scissors" action<br>
Game start<br>
&nbsp;Create variables for storing scores<br>
&nbsp;&nbsp;`playerWins` = 0<br>
&nbsp;&nbsp;`ComputerWins` = 0<br> 
&nbsp;&nbsp;`numberDraws` = 0<br>
&nbsp;Ask user input the choosen move<br>
&nbsp;&nbsp;If the user input the wrong action, ask user repeatly until user input the correct action<br>
&nbsp;Select action from the array randomly by the computer opponent<br>
&nbsp;Store their action in variable<br>
&nbsp;&nbsp;`playerSelection` = user's action<br>
&nbsp;&nbsp;computerSelection = computer opponent's action<br>
&nbsp;Round Start<br>
&nbsp;&nbsp;Get the playerSelection and computerSelection<br>
&nbsp;&nbsp;Check the playerSelection and computerSelection for displaying the result by using the array<br>
&nbsp;&nbsp;&nbsp;If the `playerSelection === computerSelection`,<br>
&nbsp;&nbsp;&nbsp;&nbsp;display `Round #: Draw`
&nbsp;&nbsp;&nbsp;If `computerSelection` = lose condition action of `playerSelection`,<br>
&nbsp;&nbsp;&nbsp;&nbsp;display Round #: Player wins! playerSelection beats computerSelection`<br>   
&nbsp;&nbsp;&nbsp;If `playerSelection` = lose condition action of `computerSelection`,<br>
&nbsp;&nbsp;&nbsp;&nbsp;display `Round #: Player wins! computerSelection beat playerSelection`<br>
&nbsp;Round End <br>
&nbsp;If round was draw,<br>
&nbsp;&nbsp;increment `numberDraws` by 1<br>
&nbsp;&nbsp;display the scoreboard<br>            
&nbsp;If player wins the round,<br> 
&nbsp;&nbsp;increment `playerWins` by 1<br>
&nbsp;&nbsp;display the scoreboard<br>             
&nbsp;If player Computer opponent wins the round,<br> 
&nbsp;&nbsp;increment `computerWins` by 1<br>
&nbsp;&nbsp;display the scoreboard<br>
&nbsp;Repeat the steps until  `playerWins` or `computerWins` = 5<br>
&nbsp;If `playerWins` == 5,<br>
&nbsp;&nbsp;Display `Game Result: Player Wins!`<br>
&nbsp;Else if `playerWins` == 5,<br>
&nbsp;&nbsp;Display `Game Result: Computer Wins!`<br>           
Game end