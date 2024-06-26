const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)

  return choices[randomIndex]
}
