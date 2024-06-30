// DOM Manipulation

// gives random number between 1 & 20

const randomNumber = Math.trunc((Math.random() * 20) + 1);
console.log(randomNumber);

const inputElement = document.getElementById("guessNumber");
const button = document.querySelector("#check-btn");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const againButton = document.querySelector(".again");

let scores = 20;

highScore.textContent = localStorage.getItem("highscore") || 0;

//button.addEventListener("click", compare);

function compare() {
    console.log("clicked");
    const value = Number(inputElement.value);

    if(!value) {
        alert("Please enter number");
    } else if (value == randomNumber) {
        message.textContent = "Correct Guess !";
        document.querySelector("body").style.backgroundColor = "green";
        number.textContent = randomNumber;

        const high = localStorage.getItem("highscore");

        if (!high || scores > high) {
            highScore.textContent = scores;
            localStorage.setItem("highscore", scores);
        } else {
            highScore.textContent = high;
        }
       
    } else if (value > randomNumber) {
        scores--;
        message.textContent = "Guess is too high!!";
        score.textContent = scores;
    } else {
        scores--;
        message.textContent = "Guess is too low!!";
        score.textContent = scores;
    }
}

againButton.addEventListener("click", reloadGame);

function reloadGame() {
    localStorage.setItem("highscore", scores);
    location.reload();

}










