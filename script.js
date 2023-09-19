function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function game() {
    let roundsPlayed = 0;
    let playerScore = 0;
    let computerScore = 0;
    let rpsWinner = '';

    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Welcome to RPS enter your pick").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Win Totals ${playerScore}`);
        console.log(`Computer Win Totals ${computerScore}`);
    }


   function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw! you both picked ${playerSelection}`; 
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerScore++ 
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerScore++  
        return 'You win! Scissors beats paper';
    } else {
      computerScore++  
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
 }

 if (playerScore > computerScore) {
    rpsWinner = 'Winner winner chicken dinner!';
} else if (playerScore === computerScore) {
    rpsWinner = "Ain't norway it's a draw!";
} else {
    rpsWinner = 'Lost to zeros and ones lul';
}
console.log(`And the winner is ${rpsWinner} !`);
}

game();