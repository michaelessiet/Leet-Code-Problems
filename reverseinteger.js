// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return result * sign;
};