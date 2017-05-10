
var Bob = function() {

}

Bob.prototype.hey = function (input) {
  if (input === input.toUpperCase() && hasUpper(input)) {return 'Whoa, chill out!'};
  if (input[input.length-1] === '?') {return 'Sure.'};
  if (justSilence(input)) {return 'Fine. Be that way!'};
  return 'Whatever.';
}

function hasUpper(input) {
  for (var i=0; i < input.length; i++){
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {return true};
  }
  return false;
}

function justSilence(input) {
  var count = 0;
  for (var i=0; i < input.length; i++){
    if (input.charCodeAt(i) === 32) {count++};
  }
  return (count === input.length);
}

module.exports = Bob;
