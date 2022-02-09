// set initial count
let count = 0;

// select value and buttons
const counterValue = document.querySelector("#counter-value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      counterValue.style.color = "red";
    }
    if (count > 0) {
      counterValue.style.color = "green";
    }
    if (count === 0) {
      counterValue.style.color = "#222";
    }
    counterValue.textContent = count;
  });
});
console.log(buttons);
