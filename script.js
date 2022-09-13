let hiddenNum = document.querySelector(".hidden_number");
let guessingNum = document.querySelector(".guessing_number");
let inputNum = document.querySelector(".input_number");
let chance = document.getElementById("chance");
let highScore = document.getElementById("highscore");
let startBtn = document.querySelector(".start");

let randomNum = Math.ceil(Math.random() * 20);
let totalChance = 20;
let highScoreNum = 0;

inputNum.addEventListener("input", numSlice);

function numSlice() {
    this.value = this.value.replace(/[^\d]/, "").slice(0, 2);
}

let shake = "shake";
let zoom = "zoom";
let playAgain = "start_again"
let totalTime = 500;

function addAndRemove(className, totalTime, tagName) {
    tagName.classList.add(className);
    setTimeout(function() {
        tagName.classList.remove(className);
    }, totalTime);
}

document.querySelector(".check").addEventListener("click", function() {
    let inputNumVal = document.querySelector(".input_number").value;
    hiddenNum.classList.remove("shake");
    if (totalChance > 0 && highScoreNum < 20 && inputNumVal > 0) {
        if (inputNumVal < randomNum) {
            chance.textContent = `${--totalChance}`;
            guessingNum.textContent = "Too Low!";
            addAndRemove(shake, totalTime, hiddenNum);

        } else if (inputNumVal > randomNum) {
            chance.textContent = `${--totalChance}`;
            guessingNum.textContent = "Too Big";
            addAndRemove(shake, totalTime, hiddenNum);
        } else {
            hiddenNum.textContent = `${randomNum}`;
            highScore.textContent = `${++highScoreNum}`;
            addAndRemove(zoom, totalTime * 5, hiddenNum);
            guessingNum.textContent = "You Win!";
            /*            guessingNum.style.fontSize = '24px';
                        guessingNum.style.color = '#dcedcc';*/
            guessingNum.style.cssText = `
              font-size: 24px; 
              color: #dcedcc;
            `;
            document.querySelector(".check").disabled = true;
            addAndRemove(playAgain, totalTime * 16, startBtn);
        }
    }
});

startBtn.addEventListener("click", function() {
    document.querySelector(".check").disabled = false;
    chance.textContent = "20";
    hiddenNum.textContent = "?";
    guessingNum.style.cssText = `
              font-size: unset; 
              color: unset;
            `;
    guessingNum.textContent = "Start Guessing...";
    inputNum.value = "";
    randomNum = Math.ceil(Math.random() * 20);
});