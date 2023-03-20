const button = document.querySelector(".btn");

button.addEventListener("mouseover", (event) => {
  const x = event.pageX - button.offsetLeft;
  const y = event.pageY - button.offsetTop;
  console.log(x);
  console.log(y);
  button.style.setProperty("--Xpos", x + "px");
  button.style.setProperty("--Ypos", y + "px");
});
