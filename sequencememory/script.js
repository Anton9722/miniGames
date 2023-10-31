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
//glöm inte fixa så att usersequence inte multipleceras varje gång
gameStartBtn.addEventListener("click", function () {
  addSequence();
  sequenceBtnsAnimation();
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

//checks if usersequence is same as sequence, returns true or false
function checkUserSequenceAgainstSequence() {
  return JSON.stringify(sequence) == JSON.stringify(userSequence);
}

//animation, loops through sequence list and changes colors of the elements for a second
function sequenceBtnsAnimation() {
  for (let i = 0; i < sequence.length; i++) {
    setTimeout(() => {
      document.getElementById(sequence[i]).style.backgroundColor = "black"; // sets background color to black
      let sequenceSound = new Audio("sequencesound.mp3");
      sequenceSound.play(); // plays sound
    }, i * 1000);
    setTimeout(() => {
      document.getElementById(sequence[i]).style.backgroundColor = "#c2d9ff"; // reset the background color to its original color
    }, (i + 1) * 1000);
  }
}
