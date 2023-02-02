/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack = s[i] + stack;
        } else if (
            (s[i] == ')' && stack[0] != '(') ||
            (s[i] == '}' && stack[0] != '{') ||
            (s[i] == ']' && stack[0] != '[')
        ) {
            return false;
        } else if (
            (s[i] == ')' && stack[0] == '(') ||
            (s[i] == '}' && stack[0] == '{') ||
            (s[i] == ']' && stack[0] == '[')
        ) {
            stack = stack.slice(1, stack.length);
        }
    }
    if (stack != '') {
        return false;
    }

    return true;
};

console.log(isValid('()'));
console.log(isValid('{}[]{}'));
console.log(isValid('(]'));

// ACCEPTED
