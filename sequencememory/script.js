let gameStartBtn = document.getElementById("gameStartBtn");

let sequenceBtn1 = document.getElementById("sequenceBtn1");
let sequenceBtn2 = document.getElementById("sequenceBtn2");
let sequenceBtn3 = document.getElementById("sequenceBtn3");
let sequenceBtn4 = document.getElementById("sequenceBtn4");
let sequenceBtn5 = document.getElementById("sequenceBtn5");
let sequenceBtn6 = document.getElementById("sequenceBtn6");
let sequenceBtn7 = document.getElementById("sequenceBtn7");
let sequenceBtn8 = document.getElementById("sequenceBtn8");
let sequenceBtn9 = document.getElementById("sequenceBtn9");

let sequence = [];
let userSequence = [];

gameStartBtn.addEventListener("click", function () {
  let run = true;
  if (run) {
    addSequence();
    console.log(sequence);
  }
});

sequenceBtn1.addEventListener("click", function () {
  userSequence.push("sequenceBtn1");
});

sequenceBtn2.addEventListener("click", function () {
  userSequence.push("sequenceBtn2");
});

sequenceBtn3.addEventListener("click", function () {
  userSequence.push("sequenceBtn3");
});

sequenceBtn4.addEventListener("click", function () {
  userSequence.push("sequenceBtn4");
});

sequenceBtn5.addEventListener("click", function () {
  userSequence.push("sequenceBtn5");
});

sequenceBtn6.addEventListener("click", function () {
  userSequence.push("sequenceBtn6");
});

sequenceBtn7.addEventListener("click", function () {
  userSequence.push("sequenceBtn7");
});

sequenceBtn8.addEventListener("click", function () {
  userSequence.push("sequenceBtn8");
});

sequenceBtn9.addEventListener("click", function () {
  userSequence.push("sequenceBtn9");
});

//Returns a random string with the name of the btns, so for example "sequenceBtn9" or "sequenceBtn2" and adds it to the sequence array
function addSequence() {
  let random = Math.floor(Math.random() * 9) + 1;
  let nextSequene = "sequenceBtn" + random.toString();
  sequence.push(nextSequene);
  return nextSequene;
}

function checkPlayerSequenceAgainstSequence() {}
