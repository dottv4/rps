const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset');
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btnContainer');
const playerScoreNum = document.querySelector('#player');
const computerScoreNum = document.querySelector('#computer');
const gameOverScreen = document.querySelector('.gameOver');
const rndWin = document.querySelector('#rndWin');
const beatBy = document.querySelector('#beatBy');

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie';
    }
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      roundWinner = 'player';
    }
    if (
      (computerSelection === 'rock' && playerSelection === 'scissors') ||
      (computerSelection === 'paper' && playerSelection === 'rock') ||
      (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
      computerScore++;
      roundWinner = 'computer';
    }
    updateScoreMsg(roundWinner, playerSelection, computerSelection);
  };

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}; 

function clickInput(playerSelection) {
    if (isGameOver()) {
      gameOverScreen.textContent = 'GAME OVER';
      return
    };
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore();
  };

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreNum.textContent = 'Player: 0';
    computerScoreNum.textContent = 'Computer: 0';
    gameOverScreen.textContent = '';
    rndWin.textContent = '';
    beatBy.textContent = '';
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
};
  
function updateScore() {
  if (roundWinner === 'tie') {
    rndWin.textContent = "It's a tie!"
  } else if (roundWinner === 'player') {
    rndWin.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    rndWin.textContent = 'You lost!'
  }

  playerScoreNum.textContent = `Player: ${playerScore}`;
  computerScoreNum.textContent = `Computer: ${computerScore}`;
};

function updateScoreMsg(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    beatBy.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
  }
  if (winner === 'computer') {
    beatBy.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
  }
  if (winner === 'tie') {
    beatBy.textContent = '';
  }
};

rockBtn.addEventListener('click', () => clickInput('rock'));
paperBtn.addEventListener('click', () => clickInput('paper'));
scissorsBtn.addEventListener('click', () => clickInput('scissors'));
resetBtn.addEventListener('click', () => restartGame());