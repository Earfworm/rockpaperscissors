const cpuGameMoves = ["Rock", "Paper", "Scissors"];
let p1;
let p2;

const startGame = () => {
  const gameMovesPrompt = prompt("Rock, Paper, Scissors");
  if (
    gameMovesPrompt !== "Rock" ||
    gameMovesPrompt !== "Paper" ||
    gameMovesPrompt !== "Scissors"
  ) {
    console.log("Invalid: Enter Rock, Paper, Scissors");
  }
};

startGame();

const gamePlayRules = () => {
  if (
    (p1 === "Rock" && p2 === "Scissors") ||
    (p1 === "Paper" && p2 === "Rock") ||
    (p1 === "Scissor" && p2 === "Paper")
  ) {
    console.log(`${p1} beats ${p2}, Player One Wins`);
  } else {
    console.log(`${p2} beats ${p1}, Player One Wins`);
  }
};
