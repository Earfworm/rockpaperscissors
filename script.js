const startBtn = document.querySelector("button");
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const cpuMoves = ["rock", "paper", "scissors"];

let p2 = cpuMoves[Math.floor(Math.random() * cpuMoves.length)];

const startGame = () => {
  const userInput = prompt(
    "choose: rock, paper, scissors",
    "rock"
  ).toLowerCase();
  let p1 = userInput;
  const gamePlayRules = () => {
    if (
      (p1 === rock && p2 === scissors) ||
      (p1 === paper && p2 === rock) ||
      (p1 === scissors && p2 === paper)
    ) {
      console.log(`${p1} beats ${p2}, Player One Wins`);
    } else if (
      (p2 === rock && p1 === scissors) ||
      (p2 === paper && p1 === rock) ||
      (p2 === scissors && p1 === paper)
    ) {
      console.log(`${p2} beats ${p1}, Player Two Wins`);
    } else {
      console.log(`Draw Game`);
    }
  };
  if (
    userInput === rock ||
    userInput === paper ||
    (userInput === scissors && typeof userInput === "string")
  ) {
    gamePlayRules();
  } else {
    console.log("Invalid: Enter rock, paper, scissors");
  }
};

startBtn.addEventListener("click", startGame);
