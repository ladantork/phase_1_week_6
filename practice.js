function canVote(age) {
  return age >= 18;
}

function func() {
  var filtered = [24, 33, 16, 40].filter(canVote);
 console.log(filtered);
}
func();

// Positive
function isPositive(value) {
  return value > 0;
}
 
var filtered = [112, 52, 0, -1, 944].filter(isPositive);
console.log(filtered);

// Even
function isEven(value) {
  return value % 2 == 0;
}
 
var filtered = [11, 98, 31, 23, 944].filter(isEven);
console.log(filtered);