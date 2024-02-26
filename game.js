function getComputerChoise() {
    const options = ["Rock","Paper","Scissors"];                    // create array with elements //
    const random = Math.floor(Math.random() * options.length);      // randomly picks one of three elements in array //
    return options[random]                                          // return random of options //
}
//End of computer selection//

// Player selection //
function playerChoise() {
    let choise = prompt("Pick your choise: Rock, Paper or Scissors?");
    choise = choise.toLocaleLowerCase();
    return choise
}
//End of player selection//

let playerScore = 0;
let computerScore = 0;

function playGame() {
    let playerSelection = playerChoise();
    let computerSelection = getComputerChoise().toLocaleLowerCase();
    
    //Computer selected ROCK//
    if ((computerSelection == "rock") && (playerSelection == "rock")) {
        console.log("It's a tie!");
    } else if ((computerSelection == "rock") && (playerSelection == "paper")) {
        console.log("You win!");
        playerScore++;
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        console.log("You lost!");
        computerScore++;
    }
    //Computer selected PAPER//
    else if ((computerSelection == "paper") && (playerSelection == "paper")) {
        console.log("It's a tie!");
    } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
        console.log("You lost!");
        computerScore++;
    } else if ((computerSelection == "paper") && (playerSelection == "scissors")) {
        console.log("You win!");
        playerScore++;
    } 
    //Computer selected SCISSORS//
    else if ((computerSelection == "scissors") && (playerSelection == "scissors")) {
        console.log("It's a tie!");
    } else if ((computerSelection == "scissors") && (playerSelection == "rock")) {
        console.log("You win!");
        playerScore++;
    } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
        console.log("You lost!");
        computerScore++;
    } else { 
        console.log("Please enter either: paper, rock or scissors");
    }

    console.log(playerScore);
    console.log(computerScore);
    console.log(playerSelection);
    console.log(computerSelection);
}

while(computerScore <= 4 && playerScore <= 4) {
    playGame();
}