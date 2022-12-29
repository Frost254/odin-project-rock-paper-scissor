const getComputerChoice = () => {
    let r = Math.floor((Math.random() * 3) + 1);
    if (r == 1) {
        return "rock"
    }

    else if (r == 2) {
        return "paper"
    }

    else {
        return "scissor"
    }
}

let computerRoundCount = 0;
let playerRoundCount = 0;

function playRound (playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase()
    let cs = computerSelection.toLowerCase()


    if (ps === "rock" && cs === "scissor") {
        playerRoundCount += 1;
        return `The player wins! You chose ${ps} and the computer chose ${cs}`
    }

    else if (ps === "rock" && cs === "paper") {
        computerRoundCount += 1;
        return `The computer wins! You chose ${ps} and the computer chose ${cs}`
    }

    else if (ps === "paper" && cs === "scissor") {
        computerRoundCount += 1;
        return `The computer wins! You chose ${ps} and the computer chose ${cs}`
    }

    else if (ps === "paper" && cs === "rock") {
        playerRoundCount += 1;
        return `The player wins! You chose ${ps} and the computer chose ${cs}`
    }

    else if (ps === "scissor" && cs === "paper") {
        playerRoundCount += 1;
        return `The player wins! You chose ${ps} and the computer chose ${cs}`
    }

    else if (ps === "scissor" && cs === "rock") {
        computerRoundCount += 1;
        return `The computer wins! You chose ${ps} and the computer chose ${cs}`
    }

    else if (ps === cs) {
        return "The round ends in a draw! You both picked " + ps
    }

    else {
        return "Invalid player selection, you picked " + ps;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your pick? ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The player has ${playerRoundCount} rounds and the computer has ${computerRoundCount} rounds.`)
    }
}

game()

