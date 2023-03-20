const textArea = document.querySelector("#textarea");
const typedChar = document.querySelector("#total-char");
const remainingChar = document.querySelector("#remaining-char");

textArea.addEventListener("keyup", () => {
  updateText();
});

updateText();

function updateText() {
  let typeValue = textArea.value.length;
  typedChar.innerText = typeValue;
  let maxLength = textArea.getAttribute("maxlength");
  remainingChar.innerText = maxLength - typeValue;
}
