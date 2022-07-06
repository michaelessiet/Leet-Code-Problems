// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (var i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            if (map[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
    
};