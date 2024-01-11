// Get references to HTML elements for win, loss, total count, and games count
let winCountEl = document.getElementById("winCount-el");
let lossCountEl = document.getElementById("lossCount-el");
let totalCountEl = document.getElementById("totalCount-el");
let gamesCountEl = document.getElementById("gamescount-el");

// Initialize counters
let numberWins = 0;
let numberLoss = 0;
let numberTotalGames = 0;

// Function to handle a win event
function win() {
    // Increment win count and update displayed count
    numberWins += 1;
    winCountEl.textContent = numberWins;

    // Update previous games and total games played
    updatePreviousGames("W");
    totalGamesPlayed();
}

// Function to handle a loss event
function loss() {
    // Increment loss count and update displayed count
    numberLoss += 1;
    lossCountEl.textContent = numberLoss;

    // Update previous games and total games played
    updatePreviousGames("L");
    totalGamesPlayed();
}

// Function to update the total games played count
function totalGamesPlayed() {
    numberTotalGames += 1;
    totalCountEl.textContent = numberTotalGames;
}

// Function to reset all counts to zero
function reset() {
    numberWins = 0;
    numberLoss = 0;
    numberTotalGames = 0;

    // Reset displayed counts and clear previous games
    winCountEl.textContent = 0;
    lossCountEl.textContent = 0;
    totalCountEl.textContent = 0;
    gamesCountEl.textContent = "";
}

// Function to update the previous games display
function updatePreviousGames(result) {
    // Append the result (W or L) to gamescount-el
    gamesCountEl.innerHTML += `<span class="${result.toLowerCase()}">${result}</span> - `;
}
