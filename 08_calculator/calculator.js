const add = function (num1, num2) {
  if (((typeof (num1) != "number") || isNaN(num1)) || ((typeof (num2) != "number") || isNaN(num2))) {
    return "ERROR"
  }
  return num1 + num2
};

const subtract = function (num1, num2) {
  if (((typeof (num1) != "number") || isNaN(num1)) || ((typeof (num2) != "number") || isNaN(num2))) {
    return "ERROR"
  }
  return num1 - num2
};

const sum = function (nums) {
  let sum = 0;

  for (const num of nums) {

    sum += num;

  }
  return sum;
};

const multiply = function (...args) {
  // using ...args is not needed because it only takes 1 arg an array of nums you can 
  // use the of the sum.

  let multiplied = 1;
  numbers = args[0]
  for (const num of numbers) {

    multiplied *= num;

  }
  return multiplied;
};

const power = function (num1, power) {
  return Math.pow(num1, power)

};

const factorial = function (num) {
  let factorial = 1
  if ((num == 1)|| (num == 0)){
    return factorial
  }
  for (let i = 1; i <= num ; i++) {
    
    factorial *= i
  }
  return factorial

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
