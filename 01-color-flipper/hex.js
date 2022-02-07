const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const getHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
};

const button = document.getElementById("btn");
color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
});
