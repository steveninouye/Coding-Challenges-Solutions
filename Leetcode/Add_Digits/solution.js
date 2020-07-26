var addDigits = function (num) {
  while (num > 9) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
};

var addDigits = function (num) {
  if (num === 0) return num;

  const result = num % 9;
  return result === 0 ? 9 : result;
};

var addDigits = function (num) {
  return num ? num % 9 || 9 : 0;
};
