// Game state
let humanScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Play one round and update the score
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    resultDiv.textContent = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  updateScore();
  checkWinner();
}

// Update score display
function updateScore() {
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

// Check for a winner
function checkWinner() {
  if (humanScore === 5) {
    resultDiv.textContent = "🎉 You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "💀 Computer won the game!";
    disableButtons();
  }
}

// Disable game buttons
function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Reset game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  resultDiv.textContent = "Choose rock, paper, or scissors to start!";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

// Event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
document.getElementById("reset").addEventListener("click", resetGame);