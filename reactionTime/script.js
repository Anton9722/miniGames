let reactTimeDiv = document.getElementById("divToClickForReactionTime");
let reactionTimeImage = document.getElementById("reactionTimeImage");
let textInReactionTime = document.getElementById("textInReactionTime");

reactTimeDiv.addEventListener("click", function () {
  let btn = document.createElement("button");
  btn.id = "reactionBtn";
  btn.innerHTML = "CLICK ME WHEN SCREEN GOES GREEN!";

  reactTimeDiv.appendChild(btn);
  reactTimeDiv.style.backgroundColor = "red";
  reactionTimeImage.remove();
  textInReactionTime.remove();
  //creates random number between 1-10
  let random = Math.floor(Math.random() * 10) + 1;
  console.log("random antal sekunder " + random);
  //waits for random amount of seconds and then turn div green
  setTimeout(
    () => (reactTimeDiv.style.backgroundColor = "green"),
    random * 1000
  );
  let startTime = new Date();
  btn.addEventListener("click", () => {
    let stopTime = new Date();
    let result = Math.abs(startTime.getTime() - stopTime.getTime()) / 1000;
    result = result - random;
    console.log("Resultat " + result);
  });
});

//gets amount of miliseconds between the two dates
//let x = new Date();
//let y = new Date();
//let timeelapsed = x - y;
//console.log(timeelapsed);
