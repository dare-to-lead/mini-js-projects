const navbar = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");

console.log(navbar.offsetHeight);
console.log(bottomEl.offsetTop);

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY)
  const calculated =
    window.scrollY > bottomEl.offsetTop - navbar.offsetHeight - 30;
  //console.log(calculated);
  if (calculated) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
