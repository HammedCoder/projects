const div = document.querySelector("#message h2");
let randomNumber;
let canPlay = true;
let btn = document.querySelectorAll(".button button:not(:last-child)");
let score = document.querySelector(".score");
let display = document.getElementById("text-input");
let message,
  playing = true;
  div.textContent = "Choose a num between 0 - 10";
function guess() {
  if (display.value == "") {
    alert("Enter a value between 1 and 10");
  } else randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber === display.value) {
    message = "You have won the game";
    score.textContent = 5;
  } else {
    message = `Wrong! The hidden number is (${randomNumber}) <br>try again`;
    score.textContent = 0;
  }
  div.innerHTML = message;
  console.log(randomNumber);
  console.log(display.value);
}
btn.forEach((button) => {
  button.addEventListener("click", function () {
    const value = Number(button.getAttribute("aria-label"));
    display.value = value;
  });
});

function reset() {
  playing = true;
  display.value = "";
  display.style.color = "black";
  display.style.fontWeight = "normal";
  score.textContent = "";
  score.style.padding = "18px";
  div.textContent = "Choose a num between 0 - 10";
}
function guessNum() {
  randomNumber = Math.floor(Math.random() * 11);
  if (display.value.trim === ''){
    alert(`Please, enter any value between 0 and 10`)
  } else if (display.value < 0 || display.value >10) {
    alert('Input not accepted, enter between 0-10')
  } else if (display.value === randomNumber) {
    alert(`You guess right, the answer is ${randomNumber}`)
  } else {
    alert(`You lost, the right answer is ${randomNumber}`)
  }
}
