const convertToCelsius = function (deg) {
  if ((typeof (deg) != "number") || isNaN(deg)) {
    return "ERROR"
  }
  fahrenheit = deg
  return Math.round(((fahrenheit-32)* 5 / 9 ) * 10) / 10
};

const convertToFahrenheit = function (deg) {
  if ((typeof (deg) != "number") || isNaN(deg)) {
    return "ERROR"
  }
  celcius = deg
  convToFar = (celcius* 9 / 5 ) + 32
  return Math.round(convToFar * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
