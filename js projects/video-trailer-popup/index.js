const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".cross-icon");
const container = document.querySelector(".trailer-container");

btnEl.addEventListener("click", () => {
  container.classList.remove("active");
});
closeEl.addEventListener("click", () => {
  container.classList.add("active");
});
