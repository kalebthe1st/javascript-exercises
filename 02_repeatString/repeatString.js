const repeatString = function (string, num) {
    if (typeof string !== "string") {
        throw new TypeError("the first arguement must be a string")
    }
    if (typeof num !== "number") {
        throw new TypeError("the second arguement must be a number")
    }
    if (num < 0) {
        return "ERROR"
    }
    repeatedString = ""
    for (let i = 0; i < num; i++) {
        repeatedString += string;

    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
