// Variables
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box10 = document.getElementById("box10");
let box11 = document.getElementById("box11");
let box12 = document.getElementById("box12");
let box13 = document.getElementById("box13");
let box14 = document.getElementById("box14");
let box15 = document.getElementById("box15");
let box16 = document.getElementById("box16");
let box17 = document.getElementById("box17");
let box18 = document.getElementById("box18");
let score1 = document.getElementById("score1");

let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18];

let colors = [];
let colors2 = [];

let red, green, baseColor, blue;

let allcolors = [];

let score = 0;

// Get color
function randomColor() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  baseColor = `rgb(${red}, ${green}, ${blue})`;
}

function shuffle(anArray) {
  anArray.sort(() => Math.random() - 0.5);
}

function getColors() {
  for(let i=0; i<8 ; i++){
    colors.push(randomColor());
  }
  colors2 = [...colors];
  allcolors = colors.concat(colors2);
  shuffle(allcolors);
}

function boxColors(){
  getColors();
  for(let i=0; i<16; i++){
   boxes[i].classList("`boxs[${i}]`").style.backgroundColor = allcolors[i];
   boxes[i].classList("`boxs[${i}]`").style.visibility = "hidden";
  }
};

boxColors();


box1.onclick = () => {
  
};

