const choices=['rock','paper','scissors'];
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const header=document.getElementById('header');
const playerScoreDisplay=document.getElementById('playerScoreDisplay');
const computerScoreDisplay=document.getElementById('computerScoreDisplay');
let playerScore=0;
let computerScore=0;


function play(playerChoice){
const computerChoice=choices[Math.floor(Math.random()*3)];
let result="";
    
 if(playerChoice===computerChoice){
    result="ITS A TIE!";
 }
 
 else
 {
    switch(playerChoice)
    {
    case 'rock':
            result=(computerChoice==='scissors')?"YOU WIN!":"YOU LOOSE!";
            break;
    
    case 'paper':
        result=(computerChoice==='rock')?"YOU WIN!":"YOU LOOSE!";
        break;
        
    case 'scissors':
        result=(computerChoice==='paper')?"YOU WIN!":"YOU LOOSE!";
        break;
    }
}
playerDisplay.textContent = ` 🙋🏽‍♂️ PLAYER : ${playerChoice}`;
computerDisplay.textContent = `🖥️ COMPUTER: ${computerChoice}`;
header.textContent = result; 
header.classList.remove('greendisplay','reddisplay','tiedisplay','win','tie','loose');
switch(result){
    case "YOU WIN!":
        header.classList.add("greendisplay","win");
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
        break;

    case "YOU LOOSE!":
        header.classList.add("reddisplay","loose");
        computerScore++;
        computerScoreDisplay.textContent=computerScore;
        break;

    case "ITS A TIE!":
        header.classList.add("tiedisplay","tie");
}



}



