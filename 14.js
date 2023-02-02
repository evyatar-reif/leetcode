/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var result = '';

    var i = 0;

    while (i < strs[0].length) {
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j][i]) {
                return result;
            }
            if (strs[j][i] != strs[0][i]) {
                return result;
            }
        }
        result += strs[0][i];
        i++;
    }

    return result;
};

const strs = ['flower', 'flower', 'flower', 'flower'];
console.log(longestCommonPrefix(strs));

// ACCEPTED
