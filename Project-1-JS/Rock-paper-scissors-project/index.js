//target all the buttons (rock, paper, scissor)
const buttons = document.querySelectorAll("button");

//target the paragraph tag with id="result" which show the result 
const resultElement = document.getElementById("result");

//target the user score 
const playerScoreValue = document.getElementById("user-score");

//target the computer-score
const computerScoreValue = document.getElementById("computer-score");

//take two variable which store the user and computer score
let playerScore = 0;
let computerScore = 0;

//event listener to show the result 
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playerRound(button.id, computerRound());
        resultElement.textContent = result;
    })
})

//function for computer round
function computerRound()
{
    const choices = ["rock", "paper", "scissors"];
    //computer will take the random choices
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

//function for player round
function playerRound(playerSelection, computerSelection)
{
    //tie condition for the game
    if(playerSelection === computerSelection)
    {
        return "OOops! It's a tie!";
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
     (playerSelection === "scissors" && computerSelection === "paper"))
     {
        playerScore++;
        playerScoreValue.textContent = playerScore;
        return "You win! " +" " +  playerSelection +" " +  "beats " +" "+  computerSelection; 
     }
     else if((computerSelection === "rock" && playerSelection === "scissors") ||
     (computerSelection === "paper" && playerSelection === "rock") || 
      (computerSelection === "scissors" && playerSelection === "paper"))
      {
         computerScore++;
         computerScoreValue.textContent = computerScore;
         return "Computer win! " +" " +  computerSelection +" " +  "beats " + " " + playerSelection; 
      }
     else{
        computerScore++;
        computerScoreValue.textContent = computerScore;
        return "You lose!"+ " " + computerSelection +" " +  "beats" + " " +playerSelection;
     }   
}