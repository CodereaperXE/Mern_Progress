function makeChoice(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = determineWinner(playerChoice, computerChoice);

    const resultText = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;

    document.getElementById("result").textContent = resultText;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
