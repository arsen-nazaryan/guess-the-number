let hiddenNum = document.querySelector(".hidden_number");
let guessingNum = document.querySelector(".guessing_number");
let inputNum = document.querySelector(".input_number");
let chance = document.getElementById("chance");
let highScore = document.getElementById("highscore");

let randomNum = Math.ceil(Math.random() * 20);
let totalChance = 20;
let highScoreNum = 0;

inputNum.addEventListener("input", amountofUnits);

function amountofUnits() {
    this.value = this.value.replace(/[^\d]/, "").slice(0, 2);
}

let shake = "shake";
let zoom = "zoom";
let totalTime = 500;

function addAndRemove(className, totalTime) {
    hiddenNum.classList.add(className);
    setTimeout(function() {
        hiddenNum.classList.remove(className);
    }, totalTime);
}

document.querySelector(".check").addEventListener("click", function() {
    let inputNumVal = document.querySelector(".input_number").value;
    hiddenNum.classList.remove("shake");
    if (totalChance > 0 && highScoreNum < 20 && inputNumVal > 0) {
        if (inputNumVal < randomNum) {
            chance.textContent = `${--totalChance}`;
            guessingNum.textContent = "Too low!";
            addAndRemove(shake, totalTime);
        } else if (inputNumVal > randomNum) {
            chance.textContent = `${--totalChance}`;
            guessingNum.textContent = "Too Big";
            addAndRemove(shake, totalTime);
        } else {
            hiddenNum.textContent = `${randomNum}`;
            highScore.textContent = `${++highScoreNum}`;
            addAndRemove(zoom, totalTime * 6);
            guessingNum.textContent = "You Win!";
            document.querySelector(".check").disabled = true;
        }
    }
});

document.querySelector(".start").addEventListener("click", function() {
    document.querySelector(".check").disabled = false;
    chance.textContent = "20";
    hiddenNum.textContent = "?";
    guessingNum.textContent = "Start guessing...";
    inputNum.value = "";
    randomNum = Math.ceil(Math.random() * 20);
});