var mod10 = require('../').mod10;
var should = require('should');

describe('mod10', function() {
  var testcases = [
    { input: '234567', controldigit: '6' }
  , { input: '438164872798400', controldigit: '4' }
  , { input: '600543720773', controldigit: '4' }
  , { input: '382898544113', controldigit: '9' }
  ];

  describe('create', function() {
    testcases.forEach(function(testcase) {
      var expected = testcase.controldigit;
      it('should return \'' + expected + '\' for input \'' + testcase.input + '\'', function() {
        mod10.create(testcase.input).should.eql(expected);
      });
    });
  });
  describe('apply', function() {
    testcases.forEach(function(testcase) {
      var expected = testcase.input + testcase.controldigit;
      it('should return \'' + expected + '\' for input \'' + testcase.input + '\'', function() {
        mod10.apply(testcase.input).should.eql(expected);
      });
    });
  });
  describe('validate', function() {
    testcases.forEach(function(testcase) {
      '0123456789'.split('').forEach(function(digit) {
        var shouldBeValid = digit == testcase.controldigit;
        var value = testcase.input + digit;
        it('\'' + value + '\' should be ' + (shouldBeValid ? '' : 'in') + 'valid', function() {
          mod10.isValid(value).should.eql(shouldBeValid);
        });
      });
    });
  });
});
