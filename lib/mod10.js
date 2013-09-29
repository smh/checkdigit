module.exports = {
  isValid: isValid,
  create: create,
  apply: apply
};

function isValid(input) {
  var length = input.length;
  return input.substr(length-1) === create(input.substr(0, length-1));
}

function apply(input) {
  return input + create(input);
}

function create(input) {
  var sum = 0;
  input.split('').reverse().forEach(function(value, index) {
    var weight = (index + 1) % 2 + 1;
    sum += digitSum(parseInt(value) * weight);
  });
  var sumMod10 = sum % 10;
  if (sumMod10 === 0) {
    return '0';
  } else {
    return (10 - sumMod10) + '';
  }
}

function digitSum(number) {
  var sum = 0;
  number.toString().split('').forEach(function(digit) {
    sum += parseInt(digit, 10);
  });
  return sum;
}
