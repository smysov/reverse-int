module.exports = function reverse(n) {
    let newString = String(n);
    return parseFloat(newString.split("").reverse().join(""));
};
