var Pangram = function (input) {
  this.sentence = input;
}

Pangram.prototype.isPangram = function() {
  var alphabet = new Array(26);
  alphabet.forEach(function(l) {l = 0});
  this.sentence.toLowerCase().split('').forEach(function(char) {
    var val = char.charCodeAt(0);
    if (val >= 97 && val <= 122) {
      alphabet[val - 97] = 1;
    }
  });
  var result = 0;
  alphabet.forEach(function(l) {
    result += parseInt(l);
  })
  return (result === 26);
}

module.exports = Pangram;
