// References to the HTML elements
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const userChoiceInput = document.querySelector("#userChoice");
const playButton = document.querySelector("#playButton");
// Initialize variables to store
let player;
let computer;
let result;
// Click event listener to playButton
playButton.addEventListener("click", () => {
  // User's choice and convert to uppercase
  player = userChoiceInput.value.trim().toUpperCase();
   // Check user's choice is valid
   if (player === "ROCK" || player === "PAPER" || player === "SCISSORS") {
    // Proceed
    computerTurn(); 
    playerText.textContent = `Player: ${player}`; // Show Player choice
    computerText.textContent = `Computer: ${computer}`; // Show Computer choice
    resultText.textContent = checkWinner(); // Show Game result
  } else {
    // If invalid choice is entered
    resultText.textContent = "Invalid choice. Please enter Rock, Paper, or Scissors.";
  }
});
// Computer choice
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  // Map the randNum to R, P, or S
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
// Game result
function checkWinner() {
  if (player === computer) {
    return "Draw!";
  } else if (computer === "ROCK") {
    return player === "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer === "PAPER") {
    return player === "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer === "SCISSORS") {
    return player === "ROCK" ? "You Win!" : "You Lose!";
  }
}