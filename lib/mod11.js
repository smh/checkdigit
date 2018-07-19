class mod11 {
  static isValid (input) {
    const inputString = input.toString();
    const checkDigitIndex = inputString.length - 1;
    return inputString.substr(checkDigitIndex) === create(inputString.substr(0, checkDigitIndex));
  }

  static apply (input) {
    return input + create(input);
  }

  static create (input) {
    const inputString = input.toString();
    let sum = 0;
    const charMap = (value, index) => {
      sum += parseInt(value, 10) * (index % 6 + 2);
    };

    inputString
      .split('')
      .reverse()
      .forEach(charMap);

    const sumMod11 = sum % 11;
    switch (sumMod11) {
      case 0:
        return '0';
      case 1:
        return '-';
      default:
        return (11 - sumMod11) + '';
    }
  }
}

module.exports = mod11;
