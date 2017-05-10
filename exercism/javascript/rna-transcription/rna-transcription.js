var RnaTranscription = function () {

}

RnaTranscription.prototype.toRna = function (input) {
  var output = '';
  for(var i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'G':
        output += 'C';
        break;
      case 'C':
        output += 'G';
        break;
      case 'T':
        output += 'A';
        break;
      case 'A':
        output += 'U';
        break;
      default:
        throw new Error('Invalid input');
    }
  }
  return output;
}

module.exports = RnaTranscription;
