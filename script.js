let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const values = ["rock", "paper", "scissors"];
  const randomValues = Math.floor(Math.random() * values.length);
  return values[randomValues];
}
//console.log(getComputerChoice());

function getHumanChoice() {
  const value = prompt("Please enter your value: rock, paper, or scissors").toLocaleLowerCase();
  return value;
}
//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie round! Both chose " + humanChoice + ".";
  } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
  }
}

playGame();
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);

const finalResult = (humanScore > computerScore) ? "You win the game!" : "You lose the game!";
console.log(finalResult);