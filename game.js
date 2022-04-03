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

function updateScore() {

}

let result = 'Placeholder';
let score = 0;

resultsDiv = document.querySelector('div.results');
resultsPara = document.createElement('p');
resultsPara.textContent = '';
resultsDiv.appendChild(resultsPara);


buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    result = playRound(button.className);
    console.log(result);

    resultsPara.textContent = result.resultString;
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

