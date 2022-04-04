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


// Plays a single round
function playRound(playerEvent) {
    function RoundVerdict(win) {
        if(win === true) {
            return `Win! ${playerMove} beats ${aiMove}!`;
        } else if(win === false) {
            return `Loss! ${aiMove} beats ${playerMove}!`;
        } else if(win === -1) {
            return "Draw!";
        }
    }

    function resultCollector(_verdict) {
        return {
            win: _verdict,
            resultString: RoundVerdict(_verdict),
            playerSelection: playerMove,
            computerSelection: aiMove
        }
    }

    // comes from button click
    playerMove = playerEvent.toLowerCase();
    aiMove = computerPlay().toLowerCase();

    console.log(playerMove);
    console.log(aiMove);

    // -1 refers to draw
    switch(playerMove) {
        case "rock":
            if(aiMove == "rock") {
                return resultCollector(-1);
            } else if (aiMove == "scissor") {
                return resultCollector(true);
            } else {
                return resultCollector(false);
            }
        case "paper":
            if(aiMove == "paper") {
                return resultCollector(-1);
            } else if (aiMove == "rock") {
                return resultCollector(true);
            } else {
                return resultCollector(false);
            }
        case "scissor":
            if(aiMove == "scissor") {
                return resultCollector(-1);
            } else if(aiMove == "paper") {
                return resultCollector(true);
            } else {
                return resultCollector(false);
            }
    }
}

function updateMoves(result) {
    playerMoveDisplay.textContent = result.playerSelection;
    computerMoveDisplay.textContent = result.computerSelection;
}

function gameRunner(evt) {
    if(playerScore == 5) {
        resultsPara.textContent = 'Game Over! Player has won!';
        return;
    } else if(computerScore == 5) {
        resultsPara.textContent = 'Game Over! Computer has won!';
        return;
    }

    // currentTarget is the element that the event listener is attached to
    result = playRound(evt.currentTarget.className);
    updateMoves(result);
    updateScore(result)
    
    // console.log(result.win);
    // console.log(playerScore);
    // console.log(computerScore);
    resultsPara.textContent = result.resultString;

    scorePara.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function updateScore(result) {
    if(result.win === true) {
        playerScore += 1
    } else if(result.win === false) {
        computerScore += 1
    }
}

function initialiseFeedbackArea() {
    resultsDiv = document.querySelector('div.results');
    resultsPara = document.createElement('p');
    resultsPara.textContent = '';
    resultsDiv.appendChild(resultsPara);

    scoreDiv = document.querySelector('div.score');
    scorePara = document.createElement('p');
    scorePara.textContent = '';
    scoreDiv.appendChild(scorePara);
}


let playerScore = 0;
let computerScore = 0;

playerMoveDisplay = document.querySelector('.playerMove')
computerMoveDisplay = document.querySelector('.computerMove')

initialiseFeedbackArea();

buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', gameRunner));
