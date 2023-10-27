function numberChecking(number) {
  if (number > 10) {
    return "sok";
  } else if (number % 1 !== 0 && number < 10 && number > 0) {
    return Math.floor(number);
  } else if (number < 0) {
    return 0;
  } else return number;
}

module.exports = numberChecking;
