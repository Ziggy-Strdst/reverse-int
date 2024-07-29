module.exports = function reverse(n) {
    const reverseNum = Math.abs(n).toString().split("").reverse().join("");
    return reverseNum;
};
