/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length; j++) {
            if (!isLex(words[i], words[j], order, 0)) {
                return false;
            }
        }
    }
    return true;
};
function isLex(word1, word2, order, i) {
    if ((i > word1.length) & (i < word2.length)) {
        // if word1 is shorter
        return true;
    }
    if ((i < word1.length) & (i > word2.length)) {
        // if word2 is shorter
        return false;
    }
    const index1 = order.indexOf(word1[i]);
    const index2 = order.indexOf(word2[i]);
    const diff = index1 - index2;

    if (diff < 0) {
        // if word1 is before
        return true;
    }
    if (diff > 0) {
        // if word2 is before
        return false;
    }
    if (diff == 0 && word1.length == i && word2.length == i) {
        // if all the same to last letter
        return true;
    } else {
        return isLex(word1, word2, order, i + 1);
    }
}

const words = ['apple', 'app'];
const order = 'abcdefghijklmnopqrstuvwxyz';

console.log(isAlienSorted(words, order));

// ACCEPTED
