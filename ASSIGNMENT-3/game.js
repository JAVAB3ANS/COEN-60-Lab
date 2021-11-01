let userScore = 0;
let computerScore = 0;
let playCount = 0;
let records = [];
let computerResults = [];
let resultHistory = "";
let computerCount = [];

const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const scoreBoardDiv = document.getElementById("scoreBoard");
const resultDiv = document.getElementById("result");
const resultHistoryDiv = document.getElementById("resultHistory");
const playCountDiv = document.getElementById("playCount");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function play() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function win(user, computer) {
    resultDiv.innerHTML = "Win!";
    records.push("Win!");
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    console.log(user);
    console.log(computer);
}

function lose(user, computer) {
    resultDiv.innerHTML = "Lose!";
    records.push("Lose!");
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    console.log(user);
    console.log(computer);
}

function draw(user, computer) {
    resultDiv.innerHTML = "Draw!";
    records.push("Draw!");
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    console.log(user);
    console.log(computer);
}

function game(userChoice) {
    switch (userChoice + play()) {
        case "rs": case "pr": case "sp":
            win(userChoice, play());
            computerCount.push(play());
            resultHistoryDiv.innerHTML += "Win! ";
            break;
        case "rp": case "ps": case "sr":
            lose(userChoice, play());
            computerCount.push(play());
            resultHistoryDiv.innerHTML += "Lose! ";
            break;
        case "rr": case "pp": case "ss":
            draw(userChoice, play());
            computerCount.push(play());
            resultHistoryDiv.innerHTML += "Draw! ";
            break;
    }

    playCount++;
    playCountDiv.innerHTML = `You've played ${playCount} time(s)!`;

    document.getElementById("records").innerHTML = `<p>Computer chose rock ${computerCount.filter(x => x == "r").length} time(s), paper ${computerCount.filter(x => x == "p").length} time(s), and scissors ${computerCount.filter(x => x == "s").length} time(s)!</p><br>`;
    document.getElementById("records").innerHTML += `<p>You lost ${records.filter(x => x == "Lose!").length} time(s), won ${records.filter(x => x == "Win!").length} time(s), and tied ${records.filter(x => x == "Draw!").length} time(s)!</p>`;

}

function main() {
    rockDiv.addEventListener("click", function() {
        game("r");
    })

    paperDiv.addEventListener("click", function() {
        game("p");
    })

    scissorsDiv.addEventListener("click", function() {
        game("s")
    })
}

main();