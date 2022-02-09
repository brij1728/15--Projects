const data = [
  {
    id: "1",
    name: "John",
    job: "Web developer",
    img: "59231373.jpeg",
    text: "Users will also be allowed to represent themselves differently on different platforms, by creating three different avatars, one for Facebook and Messenger, another for Instagram and a third for VR. ",
  },
  {
    id: "2",
    name: "David",
    job: "Web developer",
    img: "59231373.jpeg",
    text: "Users will also be allowed to represent themselves differently on different platforms, by creating three different avatars, one for Facebook and Messenger, another for Instagram and a third for VR. ",
  },
  {
    id: "3",
    name: "Alex",
    job: "Web developer",
    img: "59231373.jpeg",
    text: "Users will also be allowed to represent themselves differently on different platforms, by creating three different avatars, one for Facebook and Messenger, another for Instagram and a third for VR. ",
  },
  {
    id: "4",
    name: "Roma",
    job: "Web developer",
    img: "59231373.jpeg",
    text: "Users will also be allowed to represent themselves differently on different platforms, by creating three different avatars, one for Facebook and Messenger, another for Instagram and a third for VR. ",
  },
];

// select items
const img = document.getElementById("person-image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

const showPerson = (person) => {
  const item = data[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// set starting items
let currentItem = 0;

// load initial items
document.addEventListener("DOMContentLoaded", () => {
  console.log("brijesh");
  showPerson(currentItem);
});

// show next person
nextButton.addEventListener("click", () => {
  currentItem++;
  if (currentItem > data.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevButton.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomButton.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * data.length);
  console.log(currentItem);
  showPerson(currentItem);
});
