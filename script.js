const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const msgcontainer = document.querySelector(".msg-container");
let userscore = document.getElementById("user-score");
let compscore = document.getElementById("comp-score");
let userWinCount = 0;
let compWinCount = 0;

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
      msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
      userWinCount++;
      userscore.innerText = userWinCount;
  } else {
      msg.innerText = `You Lost!! ${compChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "red";
      compWinCount++;
      compscore.innerText = compWinCount;
  }
};

const drawGame = () => {
    msg.innerText = `Game Draw!!Play Again`;
    msg.style.backgroundColor = "black";
};

const genCompChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let ranIdx = Math.floor(Math.random() * 3);
  return choices[ranIdx];
};
const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  let userWin = true;
  if (userChoice === compChoice) {
    drawGame();
  }
  else {
    if (userChoice === "rock") {
      //compChoice == "scissors" || "paper"
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
      }
      showWinner(userWin, userChoice, compChoice);
  }

  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
