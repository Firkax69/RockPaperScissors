// const buttonRock = document.querySelector(".rock");
// const buttonPaper = document.querySelector(".paper");
// const buttonScissocrs = document.querySelector(".scissors");

// buttonRock.addEventListener("click", () => {
//     playGame("Rock", getComputerChoise());
// });

// buttonPaper.addEventListener("click", () => {
//     playGame("Paper", getComputerChoise());
// });

// buttonScissocrs.addEventListener("click", () => {
//     playGame("Sciccors", getComputerChoise());
// })




// function getComputerChoise() {
//     const options = ["Rock","Paper","Scissors"];
//     const random = Math.floor(Math.random() * options.length);
//     return options[random]
// }

// function playerChoise() {
//     let choise = prompt("Take your pick");
//     choise = choise.toLocaleLowerCase();
//     return choise
// }

// let computerScore = 0;
// let playerScore = 0;

// function playGame(playerSelection, computerSelection) {
//     // let playerSelection = playerChoise();
//     // let computerSelection = getComputerChoise().toLocaleLowerCase();

//     switch (playerSelection) {
//         case "rock": 
//             if (computerSelection == "paper") {
//                 console.log("You lost!");
//                 computerScore++;
//             } else if (computerSelection == "rock") {
//                 console.log("It's a tie!");
//             } else {
//                 console.log("You win!");
//                 playerScore++;
//             }
//             break;

//         case "paper": 
//             if (computerSelection == "paper") {
//                 console.log("It's a tie!");
//             } else if (computerSelection == "rock") {
//                 console.log("You win!");
//                 playerScore++;
//             } else {
//                 console.log("You lost!");
//                 computerScore++;
//             }
//             break;
//         case "scissors":
//             if (computerSelection == "scissors") {
//                 console.log("It's a tie!");
//             } else if (computerSelection == "rock") {
//                 console.log("You lost!");
//                 computerScore++;
//             } else {
//                 console.log("You win!");
//                 playerScore++;
//             }
//             break; 
//         default:
//             console.log("You can't use this weapon, please pick up either paper,scissors or rock!");
//     }

//     console.log(`Computer choose ${computerSelection}`);
//     console.log(`YOUR choise was ${playerSelection}`);
//     console.log(`Computer score: ${computerScore}`);
//     console.log(`Player score ${playerScore}`);  
// }

// while (computerScore <= 4 && playerScore <= 4) {
//     playGame();
// }

// playGame();