const num1 = Math.ceil(Math.random() * 20 + 1);
const num2 = Math.ceil(Math.random() * 20 + 1);

let correctAns = num1 * num2;

const input = document.querySelector("#input");
const form = document.querySelector("#form");
let h4 = document.querySelector("#score");
const button = document.querySelector(".btn");
const h1 = document.querySelector("#heading");
h1.innerText = `What is ${num1} multiply by ${num2}?`;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

h4.innerText = `Score: ${score}`;

form.addEventListener("submit", () => {
  //e.preventDefault();
  let userAns = +input.value;
  //console.log(userAns, typeof userAns);
  if (userAns === correctAns) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
