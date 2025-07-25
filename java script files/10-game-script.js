function randomNumber() {
  let randomNum = Math.random();
  let computerMove = "";
  if (randomNum < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNum < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissor";
  }
  return computerMove;
}

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
// Define updateScoreDisplay function globally
function updateScoreDisplay() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Call updateScoreDisplay on page load
updateScoreDisplay();

function updateScoreDisplay() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updateScoreDisplay(); // Show score on page load

function playerGame(move) {
  const pickComputerMove = randomNumber();
  let result = "";
  if (move === pickComputerMove) {
    result = "Tie";
    score.ties += 1;
  } else if (
    (move === "Rock" && pickComputerMove === "Scissor") ||
    (move === "Paper" && pickComputerMove === "Rock") ||
    (move === "Scissor" && pickComputerMove === "Paper")
  ) {
    result = "You win";
    score.wins += 1;
  } else {
    result = "You lose";
    score.losses += 1;
  }
  // result display
  document.querySelector(".js-result").innerText = `${result}.`;

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreDisplay();
  updateScoreDisplay();
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You picked <img src="images icon/${move}-emoji.png" class="move-icon" /> Computer picked <img src="images icon/${pickComputerMove}-emoji.png" class="move-icon" />`;
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreDisplay();
}
