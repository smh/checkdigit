class mod10 {
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
      const weight = (index + 1) % 2 + 1;
      sum += digitSum(parseInt(value, 10) * weight);
    };

    inputString
      .split('')
      .reverse()
      .forEach(charMap);

    const sumMod10 = sum % 10;
    if (sumMod10 === 0) {
      return '0';
    } else {
      return (10 - sumMod10) + '';
    }
  }

  static digitSum (number) {
    const sum = number > 9 ? 1 : 0;
    return sum + number % 10;
  }
}

module.exports = mod10;