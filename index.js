const choiceButtons = document.querySelectorAll('[data-choice]')
const roundCountSpan = document.querySelector('#round-count')
const humanScoreSpan = document.querySelector('#human-score')
const computerScoreSpan = document.querySelector('#computer-score')
const drawCountSpan = document.querySelector('#draws')
const humanChoiceSpan = document.querySelector('#human-choice')
const computerChoiceSpan = document.querySelector('#computer-choice')
const resultMessageP = document.querySelector('#result-message')
const roundChoicesP = document.querySelector('#round-choices')

const gameState = {
  humanScore: 0,
  computerScore: 0,
  numberOfRounds: 0,
  numberOfDraws: 0,
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

const updateUI = () => {
  roundChoicesP.style.display = 'none'
  roundCountSpan.textContent = gameState.numberOfRounds
  humanScoreSpan.textContent = gameState.humanScore
  computerScoreSpan.textContent = gameState.computerScore
  drawCountSpan.textContent = gameState.numberOfDraws
}

const resetGameState = () => {
  gameState.humanScore = 0
  gameState.computerScore = 0
  gameState.numberOfRounds = 0
  gameState.numberOfDraws = 0

  resultMessageP.textContent = ''
}

const showPlayAgainButton = () => {
  if (!document.querySelector('#play-again-button')) {
    const playAgainButton = `<button class="play-again-button" id="play-again-button">Play again</button>`
    resultMessageP.insertAdjacentHTML('afterend', playAgainButton)
    document
      .querySelector('#play-again-button')
      .addEventListener('click', handlePlayAgain)
  }
}

const addClickListenerToChoiceButtons = () => {
  choiceButtons.forEach(choiceButton =>
    choiceButton.addEventListener('click', playGame)
  )
}

const checkEndOfGame = () => {
  if (gameState.numberOfRounds === 5) {
    if (gameState.humanScore === gameState.computerScore) {
      resultMessageP.textContent = '🎉 The game ended in a draw!'
    } else if (gameState.humanScore > gameState.computerScore) {
      resultMessageP.textContent = '🎉 You won the game!'
    } else {
      resultMessageP.textContent = '🎉 Computer won the game!'
    }

    choiceButtons.forEach(choiceButton =>
      choiceButton.removeEventListener('click', playGame)
    )

    showPlayAgainButton()
  }
}

const playRound = (humanChoice, computerChoice) => {
  const humanWonRound =
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')

  gameState.numberOfRounds++
  roundCountSpan.textContent = gameState.numberOfRounds
  humanChoiceSpan.textContent = humanChoice
  computerChoiceSpan.textContent = computerChoice

  if (humanChoice === computerChoice) {
    resultMessageP.textContent = 'Draw!'
    gameState.numberOfDraws++
  } else if (humanWonRound) {
    resultMessageP.textContent = 'You won the round!'
    gameState.humanScore++
  } else {
    resultMessageP.textContent = 'Computer won the round!'
    gameState.computerScore++
  }

  updateUI()
  checkEndOfGame()
}

const playGame = event => {
  const humanChoice = event.target.dataset.choice
  const computerChoice = getComputerChoice()

  playRound(humanChoice, computerChoice)

  roundChoicesP.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', addClickListenerToChoiceButtons)

// const getHumanChoice = () => {
//   let humanChoice = prompt('Rock, paper or scissors?')

//   return humanChoice.toLowerCase()
// }

// const playGame = () => {
//   let humanScore = 0
//   let computerScore = 0
//   let numberOfRounds = 0
//   let numberOfDraws = 0

//   const playRound = (humanChoice, computerChoice) => {
//     console.log(`Round #${numberOfRounds + 1}`)

//     if (humanChoice === computerChoice) {
//       console.log('Draw!')
//       numberOfDraws++
//     } else if (
//       (humanChoice === 'paper' && computerChoice === 'rock') ||
//       (humanChoice === 'rock' && computerChoice === 'scissors') ||
//       (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//       console.log('You won the round!')
//       humanScore++
//     } else {
//       console.log('Computer won the round!')
//       computerScore++
//     }

//     console.log(
//       `You chose ${humanChoice} and Computer chose ${computerChoice}.`
//     )
//     console.log(
//       `You: ${humanScore} - Computer: ${computerScore} - Draw: ${numberOfDraws}`
//     )
//   }

//   while (numberOfRounds < 5) {
//     const humanChoice = getHumanChoice()
//     const computerChoice = getComputerChoice()

//     playRound(humanChoice, computerChoice)
//     numberOfRounds++
//   }

//   if (numberOfRounds === 5) {
//     if (humanScore === computerScore) {
//       console.log('The game ended in a draw!')
//     } else if (humanScore > computerScore) {
//       console.log('You won the game!')
//     } else {
//       console.log('Computer won the game!')
//     }
//   }

//   console.log('Final score:')
//   console.log(`You: ${humanScore} x Computer: ${computerScore}`)
// }
