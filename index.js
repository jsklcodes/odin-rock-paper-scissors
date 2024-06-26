const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)

  return choices[randomIndex]
}

const getHumanChoice = () => {
  let humanChoice = prompt('Rock, paper or scissors?')

  return humanChoice.toLowerCase()
}