var triggerBtn = document.getElementById("checkTriggerBtn");
var textAreaWrapper = document.getElementById("textAreaWrapper");
var userTextEle = document.getElementById("userTextForm");
var shortBtn = document.getElementById("shortSentenceBtn");
var longBtn = document.getElementById("longSentenceBtn");

function selectMode(modeID) {
  if(modeID == "short") {
    shortBtn.disabled = true;
    longBtn.disabled = false;
  } else if (modeID == "long") {
    shortBtn.disabled = false;
    longBtn.disabled = true;
  }
}
function checkFill(ele) {
  var filled = ele.value.length > 0;
  if(filled) {
    triggerBtn.disabled = false;
  } else {
    triggerBtn.disabled = true;
  }
}
