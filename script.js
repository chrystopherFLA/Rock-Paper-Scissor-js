function getComputerChoice(){
    let choices = Math.floor(Math.random() * 3)
    if (choices == 0) {
        choices = 'rock';
    }
    else if (choices == 1){
        choices = 'paper';
    }
    else{
        choices = 'scissor';
    }
    console.log(choices)
    return choices;

}
function getPlayerChoice(){
    let choice = prompt('Write Rock Paper or Scissor !');
    console.log(choice)
    return choice.toLowerCase();
}


function playGame(){
    function playRound(humanChoice, computerChoice){
    
    
        if(humanChoice == 'rock' && computerChoice == 'scissor'){
            console.log('Congrats you win, Rock beats Scissor');
            playerScore += 1;
        }
        else if(humanChoice == 'paper' && computerChoice == 'rock'){
            console.log('Congrats you win, Paper beats Rock');
            playerScore += 1;
        }
        else if(humanChoice == 'scissor' && computerChoice == 'paper'){
            console.log('Congrats you win, Scissor beats Paper');
            playerScore +=1;
        }
        else if(humanChoice == 'rock' && computerChoice == 'paper'){
            console.log('You lose, Paper beats Rock');
            computerScore += 1;
        }
        else if(humanChoice == 'paper' && computerChoice == 'scissor'){
            console.log('You lose, Scissor beats Paper');
            computerScore += 1;
        }
        else if(humanChoice == 'scissor' && computerChoice == 'rock'){
            console.log('You lose, Rock beats Scissor');
            computerScore += 1;
        }
        else{
            console.log('it\'s a tie');
        }
    
    }

    for(let i = 0; i < 5; i++){
        playRound(getPlayerChoice(), getComputerChoice());
     
    }

}


let playerScore   = 0;
let computerScore = 0;

playGame()



console.log('The player Score:' + playerScore, 'The computer Score:' + computerScore)

