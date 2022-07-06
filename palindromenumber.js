/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  var numbers = Array.from(x.toString());
  var reversed = numbers.reverse();
  var reversedString = reversed.join('');
  return x === parseInt(reversedString);
};
