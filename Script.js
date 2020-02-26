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

// Question marks
let qbox1 = document.getElementById("question1");
let qbox2 = document.getElementById("question2");
let qbox3 = document.getElementById("question3");
let qbox4 = document.getElementById("question4");
let qbox5 = document.getElementById("question5");
let qbox6 = document.getElementById("question6");
let qbox7 = document.getElementById("question7");
let qbox8 = document.getElementById("question8");
let qbox9 = document.getElementById("question9");
let qbox10 = document.getElementById("question10");
let qbox11 = document.getElementById("question11");
let qbox12 = document.getElementById("question12");
let qbox13 = document.getElementById("question13");
let qbox14 = document.getElementById("question14");
let qbox15 = document.getElementById("question15");
let qbox16 = document.getElementById("question16");
let qbox17 = document.getElementById("question17");
let qbox18 = document.getElementById("question18");

let score1 = document.getElementById("score1");

let boxes = [
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13,
  box14,
  box15,
  box16,
  box17,
  box18
];

let qboxes = [
  qbox1,
  qbox2,
  qbox3,
  qbox4,
  qbox5,
  qbox6,
  qbox7,
  qbox8,
  qbox9,
  qbox10,
  qbox11,
  qbox12,
  qbox13,
  qbox14,
  qbox15,
  qbox16,
  qbox17,
  qbox18
];

let colors = [];
let colors2 = [];
let gOver = [];
let gScore = 0;

let red, green, baseColor, index, blue, mark, numIndex, startTime, endTime;

let allcolors = [];

let score = 0;

let one, two;



// Get color
function randomColor() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  baseColor = `rgb(${red}, ${green}, ${blue})`;
  return baseColor;
}

function shuffle(anArray) {
  anArray.sort(() => Math.random() - 0.5);
}

function getColors() {
  for (let i = 0; i < 9; i++) {
    colors.push(randomColor());
  }

  colors2 = [...colors];

  allcolors = colors.concat(colors2);
  console.log(allcolors);
  shuffle(allcolors);
}

function boxColors() {
  getColors();
  for (let i = 0; i < 18; i++) {
    boxes[i].style.backgroundColor = allcolors[i];
    qboxes[i].innerHTML = "";
  }
}


// box view
function cover(box){
  numIndex = boxes.indexOf(box);
  qboxes[numIndex].innerHTML = "?";
  box.classList.add("cover");
}

function clear(box) {
  numIndex = boxes.indexOf(box);
  qboxes[numIndex].innerHTML = "";
  box.classList.remove("cover");
  box.classList.remove("match");
  box.classList.remove("select");
}

function clearOne(){
  clear(one);
}

function clearTwo(){
  clear(two);
}

function select(box){
  numIndex = boxes.indexOf(box);
  qboxes[numIndex].innerHTML = "X";
  box.classList.remove("cover");
  box.classList.remove("match");
  box.classList.add("select");
}

function match(box){
  numIndex = boxes.indexOf(box);
  qboxes[numIndex].innerHTML = "🗸";
  box.classList.remove("select");
  box.classList.remove("cover");
  box.classList.add("match");
}

function hideBoth(one, two){
  cover(one);
  cover(two);
}


// Score

function keepScore() {
  score1.innerHTML = score;
}

function add(){
  score = score + 10;
  keepScore();
}

function sub(){
  score = score - 5;
  keepScore();
}


function gameOver(){
  gScore = gScore + 2;
  if(gScore === 18){
    alert(`Game Over Score: ${score}`);
    score = 0;
    keepScore();
    boxes.forEach(function(box){
      clear(box);
      boxColors();
      setTimeout(function coverAll(){ for (let i = 0; i < 18; i++){cover(boxes[i])}}, 9000);
    });
  }
}


// CALLS
boxColors();
setTimeout(function coverAll(){ for (let i = 0; i < 18; i++){cover(boxes[i])}}, 9000);

// ON CLICK
box1.onclick = () => {
  if (one === undefined && !box1.classList.contains("match") && box1.classList.contains("cover")) {
    one = box1;
  } else if (two === undefined && !box1.classList.contains("match") && box1.classList.contains("cover")) {
    two = box1;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box2.onclick = () => {
  if (one === undefined && !box2.classList.contains("match") && box2.classList.contains("cover")) {
    one = box2;
  } else if (two === undefined && !box2.classList.contains("match") && box2.classList.contains("cover")) {
    two = box2;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }

};

box3.onclick = () => {
  if (one === undefined && !box3.classList.contains("match") && box3.classList.contains("cover")) {
    one = box3;
  } else if (two === undefined && !box3.classList.contains("match")&& box3.classList.contains("cover")) {
    two = box3;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one)
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box4.onclick = () => {
  if (one === undefined && !box4.classList.contains("match") && box4.classList.contains("cover")) {
    one = box4;
  } else if (two === undefined && !box4.classList.contains("match") && box4.classList.contains("cover")) {
    two = box4;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box5.onclick = () => {
  if (one === undefined && !box5.classList.contains("match") && box5.classList.contains("cover")) {
    one = box5;
  } else if (two === undefined && !box5.classList.contains("match") && box5.classList.contains("cover")) {
    two = box5;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box6.onclick = () => {
  if (one === undefined && !box6.classList.contains("match") && box6.classList.contains("cover")) {
    one = box6;
  } else if (two === undefined && !box6.classList.contains("match") && box6.classList.contains("cover")) {
    two = box6;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box7.onclick = () => {
  if (one === undefined && !box7.classList.contains("match") && box7.classList.contains("cover")) {
    one = box7;
  } else if (two === undefined && !box7.classList.contains("match") && box7.classList.contains("cover")) {
    two = box7;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box8.onclick = () => {
  if (one === undefined && !box8.classList.contains("match") && box8.classList.contains("cover")) {
    one = box8;
  } else if (two === undefined && !box8.classList.contains("match") && box8.classList.contains("cover")) {
    two = box8;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    gameOver();
    one = undefined;
    two = undefined;
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box9.onclick = () => {
  if (one === undefined && !box9.classList.contains("match") && box9.classList.contains("cover")) {
    one = box9;
  } else if (two === undefined && !box9.classList.contains("match") && box9.classList.contains("cover")) {
    two = box9;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    gameOver();
    one = undefined;
    two = undefined;
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box10.onclick = () => {
  if (one === undefined && !box10.classList.contains("match") && box10.classList.contains("cover")) {
    one = box10;
  } else if (two === undefined && !box10.classList.contains("match") && box10.classList.contains("cover")) {
    two = box10;
  }
  
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box11.onclick = () => {
  if (one === undefined && !box11.classList.contains("match") && box11.classList.contains("cover")) {
    one = box11;
  } else if (two === undefined && !box11.classList.contains("match") && box11.classList.contains("cover")) {
    two = box11;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box12.onclick = () => {
  if (one === undefined && !box12.classList.contains("match") && box12.classList.contains("cover")) {
    one = box12;
  } else if (two === undefined && !box12.classList.contains("match") && box12.classList.contains("cover")) {
    two = box12;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }

};

box13.onclick = () => {
  if (one === undefined && !box13.classList.contains("match") && box13.classList.contains("cover")) {
    one = box13;
  } else if (two === undefined && !box13.classList.contains("match") && box13.classList.contains("cover")) {
    two = box13;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one)
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box14.onclick = () => {
  if (one === undefined && !box14.classList.contains("match") && box14.classList.contains("cover")) {
    one = box14;
  } else if (two === undefined && !box14.classList.contains("match") && box14.classList.contains("cover")) {
    two = box14;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box15.onclick = () => {
  if (one === undefined && !box15.classList.contains("match") && box15.classList.contains("cover")) {
    one = box15;
  } else if (two === undefined && !box15.classList.contains("match") && box15.classList.contains("cover")) {
    two = box15;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box16.onclick = () => {
  if (one === undefined && !box16.classList.contains("match") && box16.classList.contains("cover")) {
    one = box16;
  } else if (two === undefined && !box16.classList.contains("match") && box16.classList.contains("cover")) {
    two = box16;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box17.onclick = () => {
  if (one === undefined && !box17.classList.contains("match") && box17.classList.contains("cover")) {
    one = box17;
  } else if (two === undefined && !box17.classList.contains("match") && box17.classList.contains("cover")) {
    two = box17;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};

box18.onclick = () => {
  if (one === undefined && !box18.classList.contains("match") && box18.classList.contains("cover")) {
    one = box18;
  } else if (two === undefined && !box18.classList.contains("match") && box18.classList.contains("cover")) {
    two = box18;
  }
  
  if (two !== undefined && one.style.backgroundColor == two.style.backgroundColor && boxes.indexOf(one) != boxes.indexOf(two)) {
    add();
    clear(one);
    clear(two);
    match(one);
    match(two);
    one = undefined;
    two = undefined;
    gameOver();
  } else if (two === undefined) {
    select(one);
  } else if (two !== undefined && one.style.backgroundColor != two.style.backgroundColor) {
    sub();
    clear(one);
    clear(two);
    setTimeout(hideBoth, 2000, one, two);
    one = undefined;
    two = undefined;
  }
};