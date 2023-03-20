const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");
function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let AmPm = "AM";

  if (h > 12) {
    h = h - 12;
    AmPm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = AmPm;

  setTimeout(() => {
    clock();
  }, 1000);
}

clock();
