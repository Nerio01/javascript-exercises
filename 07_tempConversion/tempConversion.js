function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(temp) {
  // To convert Fahrenheit to Celsius, subtract 32 from the Fahrenheit value and divide by 1.8.
  const converted = (temp - 32) / 1.8;
  return round(converted, 1);
};

const convertToFahrenheit = function(temp) {
  // The Celsius to Fahrenheit formula is: °F = (°C × 1.8) + 32
  const converted = (temp * 1.8) + 32;
  return round(converted, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
