let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the new secret target number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, secretNumGuess) => {
    const humanDifference = Math.abs(secretNumGuess - humanGuess);
    const computerDifference = Math.abs(secretNumGuess - computerGuess);
    if (humanDifference < computerDifference) 
        return true;
    if (computerDifference < humanDifference)
        return false;
    else return true;
};

// Increase the winner's score after each round
const updateScore = (winner) => {
    if ( winner === 'human')
        humanScore += 1;
    else computerScore += 1;
};

// Moves to the next round
const advanceRound = () => {
    return currentRoundNumber += 1;
};
