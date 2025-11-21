// Break down of the project's tasks. 
// Create a new fonction named getComputerChoice
// Write a code so that this function returns randomly the string values ("rock", "paper", "scissors") Using math.random. 





function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
}   else if (randomNumber < 0.66) {
        return "paper";
}   else { 
    return "scissors";
}
}



function getHumanChoice() {
    let answer = prompt("Let's play ! Please enter rock, paper or scissors");
    if (answer) {
        return answer.toLowerCase();
    }
    return "";
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log("Votre choix: ", humanSelection);
console.log("Choix de l'ordinateur: ", computerSelection);


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie"); 
    } else if ( 
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log("You Win!") 
    } else {
        console.log("You lose")
        computerScore++;
    }
}

playRound(humanSelection, computerSelection);

console.log(humanScore, computerScore)


