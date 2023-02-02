/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var newS = s;

    newS = newS.replace('IV', 'IIII');
    newS = newS.replace('IX', 'VIIII');
    newS = newS.replace('XL', 'XXXX');
    newS = newS.replace('XC', 'LXXXX');
    newS = newS.replace('CD', 'CCCC');
    newS = newS.replace('CM', 'DCCCC');

    console.log(newS);

    var result = 0;

    for (let i = 0; i < newS.length; i++) {
        if (newS[i] == 'I') {
            result += 1;
        } else if (newS[i] == 'V') {
            result += 5;
        } else if (newS[i] == 'X') {
            result += 10;
        } else if (newS[i] == 'L') {
            result += 50;
        } else if (newS[i] == 'C') {
            result += 100;
        } else if (newS[i] == 'D') {
            result += 500;
        } else if (newS[i] == 'M') {
            result += 1000;
        }
        // console.log(newS[i], result);
    }

    return result;
};

var str1 = 'III';
var str2 = 'LVIII';
var str3 = 'MCMXCIV';

console.log(romanToInt(str1));
console.log(romanToInt(str2));
console.log(romanToInt(str3));

// ACCEPTED
