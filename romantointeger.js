/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  var romanToIntMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
      result -= romanToIntMap[s[i]];
    } else {
      result += romanToIntMap[s[i]];
    }
  }
  return result;
};


