const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const result = document.querySelector('#result');

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.querySelector('#humanScore');
const computerScoreDisplay = document.querySelector('#computerScore');

let currentRound = 1;
const totalRounds = 5;
const roundDisplay = document.querySelector("#round");

function playRound(humanChoice) {
  if (currentRound <= totalRounds) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (humanChoice === computerChoice) {
      result.textContent = "It's a tie round! Both chose " + humanChoice + ".";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      result.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      result.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }

    // Update scores and round display
    humanScoreDisplay.textContent = `Human Score: ${humanScore} `;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
    // Increment round after logic
    currentRound++;

    // Check if the game is complete
    if (currentRound > totalRounds) {
      // Call playGame to display final result
      playGame();
    }
  }
}

function playGame() {
  if (humanScore > computerScore) {
    result.textContent = "Congratulations, You are the final winner!";
  } else if (humanScore < computerScore) {
    result.textContent = "Sorry, the computer is the final winner!";
  } else {
    result.textContent = "Finally, it's an overall tie!";
  }

  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", () => {
  resetGame();
})

function resetGame() {
  //Reset scores and round counter
  humanScore = 0;
  computerScore = 0;
  currentRound = 1;

  // Update the UI to reflect the reset state
  humanScoreDisplay.textContent = `Human Score: ${humanScore} `;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
  result.textContent = "The game has been reset. Ready to play again!";
}


