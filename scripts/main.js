//global variables
let playerSCore = 0;
let computerScore = 0;
let btns = document.querySelectorAll('button');


//get the inputs => 1-from user 2-from computer(randomly)
//computerPlay

function computerPlay(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3)
    return  choices[randomNumber]
}

//user input => when user press any btn you get the its value
//declare function that determines the winner in single round


for(let i = 0;i < btns.length;i++){
    btns[i].addEventListener('click',round)
}


function round(){
    let userSelection = this.value;
    let computerSelection = computerPlay();

    let result;

    if(userSelection === 'rock'){
        if(computerSelection === 'rock'){
            result = `It's a tie!`

        }else if(computerSelection === 'paper'){
            result = `You lost`

        }else if(computerSelection == 'scissors'){
            result = `You win`

        }

    }else if(userSelection === 'paper'){
        if(computerSelection === 'rock'){
            result = `You win`

        }else if(computerSelection === 'paper'){
            result = `It's a tie!`

        }else if(computerSelection == 'scissors'){
            result = `You lost`
            
        }

    }else if(userSelection === 'scissors'){
        if(computerSelection === 'rock'){
            result = `You lost`

        }else if(computerSelection === 'paper'){
            result = `You win`

        }else if(computerSelection == 'scissors'){
            result = `It's a tie!`
            
        }

    }


    const result_para = document.querySelector('.result_para');
    result_para.innerHTML = `you: ${userSelection} : computer: ${computerSelection} <br>
    ${result}`;

    play(result);

}

//declare function that keep the score when score reach 5 the game over



function play(result){
    

    if(result === `You win`){
        playerSCore++;
    }else if(result === `You lost`){
        computerScore++;
    }else{
        playerSCore++;
        computerScore++;
    }
    
    const score_para = document.querySelector('.score_para');
    score_para.textContent = `playerSCore: ${playerSCore} - computerScore: ${computerScore}`;

    const end_para = document.querySelector('.end_para')

    if(playerSCore === 5){
       end_para.textContent = `Game Over => YOU WIN`
    }else if(computerScore === 5){
        end_para.textContent = `Game Over => YOU LOST`
    }

    if(playerSCore === 5 || computerScore === 5){
        reset()
    }
}

//reset

function reset(){
    computerScore = 0;
    playerSCore = 0;
}

