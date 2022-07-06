/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  var result = 0;
  var i = 0;
  while (i * i <= x) {
    result = i;
    i++;
  }
  return result;
};


