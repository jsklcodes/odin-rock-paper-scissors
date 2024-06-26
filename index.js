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
