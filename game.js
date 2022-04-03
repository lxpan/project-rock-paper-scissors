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

    // comes from button click
    playerMove = playerEvent.toLowerCase();
    aiMove = computerPlay().toLowerCase();

    console.log(playerMove);
    console.log(aiMove);

    switch(playerMove) {
        case "rock":
            if(aiMove == "rock") {
                return RoundVerdict(-1);
            } else if (aiMove == "scissor") {
                return RoundVerdict(true);
            } else {
                return RoundVerdict(false);
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

function updateScore() {

}

let result = 'Placeholder';
let score = 0;

resultsDiv = document.querySelector('div.results');
resultsPara = document.createElement('p');
resultsPara.textContent = '';
resultsDiv.appendChild(resultsPara);


buttons = document.querySelectorAll('button');
// console.log(buttons);
buttons.forEach(button => button.addEventListener('click', () => {
    result = playRound(button.className);
    console.log(result);

    resultsPara.textContent = result;
}));

// computerChoice = computerPlay();
// gameResult = playRound(playerChoice, computerChoice);

/*
function game(numRounds=5) {
    for(let i = 0; i < numRounds; i++) {
        playerChoice = prompt("Please enter your move");
        computerChoice = computerPlay();
        gameResult = playRound(playerChoice, computerChoice);

        alert(RoundVerdict(gameResult, playerChoice, computerChoice));
    }
} */
// game(3)

