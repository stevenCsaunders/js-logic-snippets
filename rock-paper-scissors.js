const optionsArray = ['rock', 'paper', 'scissors']

const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase()
	if (optionsArray.indexOf(userInput) !== -1) {
		return userInput
	} else {
		return
	}
}

const getComputerChoice = () => {
	const computerChoice = Math.floor(Math.random() * 3)
	return optionsArray[computerChoice]
}

const determineWinner = (userChoice, computerChoice) => {
	return !userChoice
		? 'The computer wins, your choice was invalid'
		: userChoice === computerChoice
		? `It's a tie`
		: userChoice === `rock` && computerChoice === `paper`
		? `Computer wins, paper covers rock :-(`
		: userChoice === `paper` && computerChoice === `scissors`
		? `Computer wins, scissors cut paper :-(`
		: userChoice === `scissors` && computerChoice === `rock`
		? `Computer wins, Rock breaks scissors :-(`
		: `You win! ${userChoice} beats ${computerChoice}`
}

const playGame = (choice) => {
	const userChoice = getUserChoice(choice)
	const computerChoice = getComputerChoice()

	userChoice
		? console.log('You threw: ' + userChoice)
		: console.log(`error, invalid option`)

	computerChoice
		? console.log('The computer threw:' + computerChoice)
		: console.log(`internal error, sorry!`)

	return console.log(determineWinner(userChoice, computerChoice))
}

playGame('paper')
