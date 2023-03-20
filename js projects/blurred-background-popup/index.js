const backContainer = document.querySelector(".background-container");
const clickbtn = document.querySelector(".click-btn");
const popContainer = document.querySelector(".popup-container");
const crossbtn = document.querySelector(".cross-icon");

clickbtn.addEventListener("click", () => {
  backContainer.classList.add("active");
  popContainer.classList.remove("active");
});

crossbtn.addEventListener("click", () => {
  backContainer.classList.remove("active");
  popContainer.classList.add("active");
});
