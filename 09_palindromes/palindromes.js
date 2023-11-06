const palindromes = function (string) {
    const normalizedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedString = normalizedString.split('').reverse().join('');
    return normalizedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
