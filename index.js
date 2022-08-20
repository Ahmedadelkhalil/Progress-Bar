let progress = document.querySelector(".pro");
let circleValue = document.querySelector(".in-circle");
let inp = document.querySelector(".input");
let btn = document.querySelector(".btn");

let i = 1;

btn.addEventListener("click", () => {
  if (inp.value !== "" && inp.value < 361) {
    let holder = setInterval(() => {
      if (i < inp.value) {
        circleValue.textContent = `${i++ + 1}%`;
        progress.style.background = `conic-gradient(rgb(161, 16, 161) ${i}deg, #979191 0deg)`;
      }
      if (i > inp.value) {
        circleValue.textContent = `${i-- - 1}%`;
        progress.style.background = `conic-gradient(rgb(161, 16, 161) ${i}deg, #979191 0deg)`;
      }
      if (i == inp.value) {
        clearInterval(holder);
      }
      if (circleValue.textContent == "360%") {
        circleValue.innerHTML = `<img src="images/true.jpg" alt="" class="true">`;
      }
    }, 10);
  } else {
    window.alert("You Must Fill This Input With Numbers From 0 To 360");
  }
});
