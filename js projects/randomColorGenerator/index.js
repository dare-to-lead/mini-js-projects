const mainContainer = document.querySelector(".container");

for (let i = 0; i <= 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  mainContainer.appendChild(colorContainerEl);
}

const allColorEls = document.querySelectorAll(".color-container");

function generateColor() {
  allColorEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    console.log(colorContainerEl);
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}
generateColor();

function randomColor() {
  const characters = "0123456789abcdef";
  const codeLength = 6;
  let colorCode = "";

  for (let i = 0; i < codeLength; i++) {
    let randomStr = Math.floor(Math.random() * characters.length);
    colorCode += characters.substring(randomStr, randomStr + 1);
    // console.log(colorCode, randomStr);
  }
  return colorCode;
}
randomColor();
