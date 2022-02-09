const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");

const color = document.querySelector(".color");

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

button.addEventListener("click", () => {
  console.log(document.body);
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
