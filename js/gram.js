var noun = [];
var verb = [];
var adjective = [];
var adverb = [];
var pronoun = [];
var preposition = [];
var conjunction = [];
var determiner = [];
var exclamation = [];

function checkGram(ele) {
  ele.rows = ele.value.substr(0, ele.selectionStart).split("\n").length;
}
