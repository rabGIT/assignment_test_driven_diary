

var Hamming = function() {

}

Hamming.prototype.compute = function(strandA, strandB) {
  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  var hammingCount = 0;
  for (var i = 0; i < strandA.length; i++){
    if (strandA[i] !== strandB[i]) hammingCount++;
  }
  return hammingCount;
}


module.exports = Hamming;
