function getComputerChoice() {
    const choices = ["🪨", "📄", "✂️"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Gelijkspel";
    }
    if (
        (playerChoice === "🪨" && computerChoice === "✂️") ||
        (playerChoice === "✂️" && computerChoice === "📄") ||
        (playerChoice === "📄" && computerChoice === "🪨")
    ) {
        return "Gewonnen!";
    } else {
        return "Verloren!";
    }
}


document.getElementById("rock").addEventListener("click", function () {
    playGame("🪨");
});
document.getElementById("paper").addEventListener("click", function () {
    playGame("📄");
});
document.getElementById("scissors").addEventListener("click", function () {
    playGame("✂️");
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("result").textContent = `jouw keuze ${playerChoice}, computer keuze ${computerChoice}. ${result}`;
}