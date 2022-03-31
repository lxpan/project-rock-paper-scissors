/*
Project: Rock Paper Scissors
Author: Luoxi Pan

Description: implements the classic "Rock Paper Scissors" game in JavaScript.
The game will be played entirely within the console at this stage.

*/

// Randomly returns a legal move
function computerPlay() {
    const moveList = {
        0: "Rock",
        1: "Paper",
        2: "Scissor"
    }
    randMoveID = Math.floor(Math.random() * 3);
    //console.log(randMoveID)
    return moveList[randMoveID];

}

// Plays a single round
// Input: playerSelection, computerSelection
// Output: string declaring winner of the round, e.g. "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    playerMove = playerSelection.toLowerCase();
    aiMove = computerSelection.toLowerCase();

    console.log(playerMove);
    console.log(aiMove);
    // R > S
    switch(playerMove) {
        case "rock":
            if(aiMove == "rock") {
                return "Draw!"
            } else if (aiMove == "scissor") {
                return "Win! Rock beats scissor!"
            } else {
                return "Loss! Paper beats rock!"
            }
        case "paper":
            if(aiMove == "paper") {
                return "Draw!"
            } else if (aiMove == "rock") {
                return "Win! Paper beats rock!"
            } else {
                return "Loss! Scissor beats paper!"
            }
        case "scissor":
            if(aiMove == "scissor") {
                return "Draw!"
            } else if(aiMove == "paper") {
                return "Win! Scissor beats paper!"
            } else {
                return "Loss! Rock beats scissor!"
            }
    }
}

// Plays 5 rounds by default
// Calls playRound
function game() {
    for(let i = 0; i < 5; i++) {
        playerChoice = prompt("Please enter your move");
        result = playRound(playerChoice, computerPlay());
        alert(result)
        console.log(result)
    }
    
}

game()