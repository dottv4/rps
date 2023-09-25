//RPS GAME
//MAKE COMPUTER PICK RANDOM CHOICE
//MAKE PLAY ROUND FUNCTION

const computerSelection = getComputerChoice();
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
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
  playRound(playerSelection, computerSelection);
  updateScore();
};

rockBtn.addEventListener('click', () => clickInput('rock'));
paperBtn.addEventListener('click', () => clickInput('paper'));
scissorsBtn.addEventListener('click', () => clickInput('scissors'));

const div = document.querySelector('div');
const divThree = document.getElementById('divTwo');
const playerScorePara = document.createElement('p');
const computerScorePara = document.createElement('p');
const divTwo = document.createElement('div');
const gameOverScreen = document.getElementById('endgame');
const restartBtn = document.getElementById('restart');
div.appendChild(divTwo);
div.appendChild(playerScorePara);
div.appendChild(computerScorePara);

function updateScoreMsg(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    divTwo.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
  }
  if (winner === 'computer') {
    divTwo.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
  }
};

function updateScore() {
  if (roundWinner === 'tie') {
    divThree.textContent = "It's a tie!"
  } else if (roundWinner === 'player') {
    divThree.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    divThree.textContent = 'You lost!'
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
};

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerScorePara.textContent = 'Player: 0';
  computerScorePara.textContent = 'Computer: 0';
  gameOverScreen.textContent = '';
};

restartBtn.addEventListener('click', () => restartGame());