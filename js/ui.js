var userInput = document.getElementById("userInput");
var shortBtn = document.getElementById("shortSentenceBtn");
var longBtn = document.getElementById("longSentenceBtn");
var kaccE = document.getElementById("kacc");

function selectMode(modeID) {
  if(modeID == "short") {
    shortBtn.disabled = true;
    longBtn.disabled = false;
  } else if (modeID == "long") {
    shortBtn.disabled = false;
    longBtn.disabled = true;
  }
}

userInput.onkeyup = function () {
  checkGram(userInput);
}

userInput.onfocus = function () {
  kaccE.style.display = "block";
}

userInput.onblur = function () {
  kaccE.style.display = "none";
}
