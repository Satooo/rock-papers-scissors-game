const anyButton = document.querySelectorAll(".button");
const result = document.querySelector(".result");
const numAttempts = document.querySelector(".numAttempts");
const scoreboardPlayer = document.querySelector(".humanScore");
const scoreboardComputer = document.querySelector(".machineScore");
const options = ["rock","paper","scissors"];
let playerSelection;
let computerSelection;
let computerScore=0;
let playerScore=0;
let attempts=5;

function computerPlay(){
    let RandNum=parseInt (Math.random()*(3-1)+1);
    computerSelection=options[RandNum];
}

function playAround(playerSelection,computerSelection){
    if(playerSelection=="rock" &&computerSelection=="scissors"){
        playerScore++;
        result.textContent="You win this round, rock beats scissors";
    }
    else if(playerSelection=="paper"&&computerSelection=="rock"){
        playerScore++;
        result.textContent="You win this round, paper beats rock";
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper"){
        playerScore++;
        result.textContent="You win this round, scissors beats paper";
    }
    else if(playerSelection=="scissors" &&computerSelection=="rock"){
        computerScore++;
        result.textContent="You lose this round, rock beats scissors";
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"){
        computerScore++;
        result.textContent="You lose this round, paper beats rock";
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors"){
        computerScore++;
        result.textContent="You lose this round, scissors beats paper";
    }
    else{
        result.textContent="Tie, both have made the same attack";
    }
}

anyButton.forEach(function(el){
    el.addEventListener("click",function(el){
        game(this.id);
    })
})

function game(input){
if(attempts>=1){
playerSelection=input;
computerPlay();
console.log("computer selection: " + computerSelection);
console.log("player selection: " + playerSelection);
playAround(playerSelection,computerSelection);
attempts--;
numAttempts.textContent=attempts;
scoreboardPlayer.textContent=playerScore;
scoreboardComputer.textContent=computerScore;

if(attempts==0){
    if(playerScore>computerScore){
        result.textContent="You won, the match is over!";
    }
    else if(playerScore<computerScore){
        result.textContent="You lose, the match is over!";
    }
    else if(playerScore==computerScore){
        result.textContent="This is a tie!";
    }
}
}
}
