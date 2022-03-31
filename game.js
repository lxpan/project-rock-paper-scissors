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

function RoundVerdict(win, playerMove, aiMove) {
    if(win === true) {
        return `Win! ${playerMove} beats ${aiMove}!`;
    } else if(win === false) {
        return `Loss! ${aiMove} beats ${playerMove}!`;
    } else if(win === -1) {
        return "Draw!";
    }
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
                return -1
            } else if (aiMove == "scissor") {
                return true
            } else {
                return false
            }
        case "paper":
            if(aiMove == "paper") {
                return -1
            } else if (aiMove == "rock") {
                return true
            } else {
                return false
            }
        case "scissor":
            if(aiMove == "scissor") {
                return -1
            } else if(aiMove == "paper") {
                return true
            } else {
                return false
            }
    }
}

// Plays 5 rounds by default
// Calls playRound
function game() {
    for(let i = 0; i < 5; i++) {
        playerChoice = prompt("Please enter your move");
        computerChoice = computerPlay()
        alert(RoundVerdict(playRound(playerChoice, computerChoice),
                           playerChoice,
                           computerChoice))
    }
    
}

game()