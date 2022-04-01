/*
Project: Rock Paper Scissors
Author: Luoxi Pan

Description: implements the classic "Rock Paper Scissors" game in JavaScript.
The game will be played entirely within the console at this stage.

*/

const moveList = {
    0: "Rock",
    1: "Paper",
    2: "Scissor"
}

// Randomly returns a legal move
function computerPlay() {
    randMoveID = Math.floor(Math.random() * 3);
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

function game(numRounds=5) {
    for(let i = 0; i < numRounds; i++) {
        playerChoice = prompt("Please enter your move");
        computerChoice = computerPlay();
        gameResult = playRound(playerChoice, computerChoice);

        alert(RoundVerdict(gameResult, playerChoice, computerChoice));
    }
}

game(3)
