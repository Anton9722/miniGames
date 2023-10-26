let reactTimeDiv = document.getElementById("divToClickForReactionTime");
let reactionTimeImage = document.getElementById("reactionTimeImage");
let textInReactionTime = document.getElementById("textInReactionTime");

//gets amount of miliseconds between the two dates
//let x = new Date();
//let y = new Date();
//let timeelapsed = x - y;
//console.log(timeelapsed);

let functionNotRunning = true;
function runFor10Seconds() {
  //if its already running dont run again, insteed go to else
  if (functionNotRunning) {
    reactTimeDiv.style.backgroundColor = "#190482";
    console.log("Running");
    reactionTimeImage.remove();
    textInReactionTime.innerHTML = "Wait For Red...";
    functionNotRunning = false;
    //Create random number between 10000 - 1000, we use this to get random amout of miliseconds
    let randomTime = Math.floor(Math.random() * 10000) + 1000;
    console.log(randomTime);
    setTimeout(function () {
      reactTimeDiv.style.backgroundColor = "red";
      textInReactionTime.innerHTML = "Now!!!!";
      //get start time
      let startTime = new Date();
      reactTimeDiv.addEventListener("click", function timeTaker() {
        //gets time when user click and give reaction time result to user on screen
        let stopTime = new Date();
        let timeElapsed = stopTime - startTime;
        timeElapsed = timeElapsed / 1000;
        reactTimeDiv.style.backgroundColor = "green";
        textInReactionTime.innerHTML =
          "Reaction Time: " + timeElapsed + " Sec (Click here to play again)";
        //remove event listner to not update number score after every click after
        reactTimeDiv.removeEventListener("click", timeTaker);
      });
      //without this the game start again when user click to get result first time
      reactTimeDiv.addEventListener("click", function dontStartAgainRightNow() {
        functionNotRunning = true;
        reactTimeDiv.removeEventListener("click", dontStartAgainRightNow);
      });
    }, randomTime);
  }
}

reactTimeDiv.addEventListener("click", runFor10Seconds);
