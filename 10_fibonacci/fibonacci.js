const fibonacci = function (index) {
    if (index < 0) {
        return "OOPS"
    }
    let a = 0
    let b = 1
    let arrayFib = []
    let c = 0;
    for (let i = 0; i <= 100; i++) {
        arrayFib.push(b);
        c = a + b
        a = b
        b = c

    }
    return arrayFib[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
