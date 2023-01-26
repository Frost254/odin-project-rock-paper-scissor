// Get the buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const result = document.getElementById("result");
const scoreboard = document.getElementById("scoreboard");

var scoreboardData = {
    wins: 0,
    loses: 0,
    draws: 0,
    round: 0
};

// Add event listeners to the buttons
rockButton.addEventListener("click", function() {
  playGame("rock");
});
paperButton.addEventListener("click", function() {
  playGame("paper");
});
scissorsButton.addEventListener("click", function() {
  playGame("scissors");
});

// Play the game
function playGame(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Compare the choices and determine the winner
  const gameResult = getGameResult(playerChoice, computerChoice);

  // Update the scoreboard
  updateScoreboard(gameResult,playerChoice,computerChoice);

  // Display the result
  result.innerHTML = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${gameResult}.`;
}

// Get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Compare the choices and determine the winner
function getGameResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    scoreboardData.draws++;
    return "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    scoreboardData.wins++;
    return "You won!";
  } else {
    scoreboardData.loses++;
    return "The computer won!";
  }
}

function updateScoreboard(result, playerChoice, computerChoice) {
    var newRow = scoreboard.insertRow(-1);
    var roundCell = newRow.insertCell(0);
    var playerCell = newRow.insertCell(1);
    var computerCell = newRow.insertCell(2);
    var outcomeCell = newRow.insertCell(3);
    roundCell.innerHTML = ++scoreboardData.round;
    playerCell.innerHTML = playerChoice;
    computerCell.innerHTML = computerChoice;
    outcomeCell.innerHTML = result;
    if (result == "You won!") {
        scoreboardData.wins++;
    }
    else if (result == "The computer won!") {
        scoreboardData.loses++;
    }
    else{
        scoreboardData.draws++;
    }
    document.getElementById("wins").innerHTML = scoreboardData.wins;
    document.getElementById("loses").innerHTML = scoreboardData.loses;
    document.getElementById("draws").innerHTML = scoreboardData.draws;
    if (scoreboardData.wins === 5) {
        alert("You won! Congratulations!");
    }
    else if (scoreboardData.loses === 5) {
        alert("The computer won! Better luck next time!");
    }
}


