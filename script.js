<<<<<<< HEAD
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");
  const resizeButton = document.getElementById("resize-button");

  function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear any existing grid
    const gridSize = size * size;
    const squareSize = 960 / size; // Make the total grid size 960px by 960px

    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor(); // Change color on hover
      });
      gridContainer.appendChild(square);
    }
  }

  // Get random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Button functionality
  resizeButton.addEventListener("click", () => {
    let size = prompt("Enter the number of squares per side (max 100):");
    size = parseInt(size);
    if (size > 100) {
      size = 100;
    }
    createGrid(size);
  });

  // Initialize the grid with 16x16 squares
  createGrid(16);
=======
// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Select the results div and message element
const resultsDiv = document.getElementById("results");
const message = document.getElementById("message");

// Define the playRound function
function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  let resultMessage = "";

  if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  // Update the message and scores in the DOM
  message.textContent = resultMessage;
  resultsDiv.children[0].textContent = `Player: ${playerScore}`;
  resultsDiv.children[1].textContent = `Computer: ${computerScore}`;

  // Check if someone has reached 5 points
  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

// Announce the winner and disable buttons
function announceWinner() {
  if (playerScore === 5) {
    message.textContent = "Congratulations! You won the game!";
  } else if (computerScore === 5) {
    message.textContent = "Sorry! The computer won the game.";
  }

  // Disable all buttons
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors");
>>>>>>> c704960841e97ab42eac3a084b79206f35e2cf8a
});
