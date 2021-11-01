let userScore = 0;
let computerScore = 0;
let playCount = 0;
let computerResults = [];
let computerCount = [];
let records = [];
let resultHistory = "";

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

function compare(yourInput, computerGen) {
    console.log(yourInput);
    console.log(computerGen);
    
    computerCount.push(play());

    switch (yourInput + play()) {
        case "rs": case "pr": case "sp":  
            resultHistoryDiv.innerHTML += "Win! ";
            records.push("Win!");
            userScore++;
            break;
        case "rp": case "ps": case "sr":  
            resultHistoryDiv.innerHTML += "Lose! ";
            records.push("Lose!");
            computerScore++;
            break;
        case "rr": case "pp": case "ss": 
            resultHistoryDiv.innerHTML += "Draw! ";
            records.push("Draw!");
            break;
    }

    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;

    playCount++;
    playCountDiv.innerHTML = `You've played ${playCount} time(s)!`;

    document.getElementById("records").innerHTML = `<p>Computer chose rock ${computerCount.filter(x => x == "r").length} time(s), paper ${computerCount.filter(x => x == "p").length} time(s), and scissors ${computerCount.filter(x => x == "s").length} time(s)!</p>`;
    document.getElementById("records").innerHTML += `<p>You lost ${records.filter(x => x == "Lose!").length} time(s), won ${records.filter(x => x == "Win!").length} time(s), and tied ${records.filter(x => x == "Draw!").length} time(s)!</p>`;

}

function main() {
    rockDiv.addEventListener("click", function() {
        compare("r", play());
    })

    paperDiv.addEventListener("click", function() {
        compare("p", play());
    })

    scissorsDiv.addEventListener("click", function() {
        compare("s", play());
    })
}

main();