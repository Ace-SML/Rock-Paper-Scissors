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
});
