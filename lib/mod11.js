module.exports = {
  isValid: isValid,
  create: create,
  apply: apply
};

function isValid(input) {
  var checkDigitIndex = input.length - 1;
  return input.substr(checkDigitIndex) === create(input.substr(0, checkDigitIndex));
}

function apply(input) {
  return input + create(input);
}

function create(input) {
  var sum = 0;
  input.split('').reverse().forEach(function (value, index) {
    sum += parseInt(value, 10) * (index % 6 + 2);
  });
  var sumMod11 = sum % 11;
  if (sumMod11 === 0) {
    return '0';
  } else if (sumMod11 === 1) {
    return '-';
  } else {
    return (11 - sumMod11) + '';
  }
}
