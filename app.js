let a = ""; // global variable for player's choice

function main() {
    // computer's choice
    let b = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * b.length);
    let r = b[i];

    // show both choices
    document.getElementById("clear").innerHTML =
        "Computer: " + r + " | Player: " + a;

    // check result
    if (r === a) {
        document.getElementById("ans").innerHTML = "It's a draw!";
    } 
    else if (
        (a === "rock" && r === "scissors") ||
        (a === "paper" && r === "rock") ||
        (a === "scissors" && r === "paper")
    ) {
        document.getElementById("ans").innerHTML = "🎉 You win!";
    } 
    else {
        document.getElementById("ans").innerHTML = "😢 You lose!";
    }
}
