var checkdigit = require('../');
var should = require('should');

describe('mod11', function() {
  describe('create', function() {
    [ { input: '1234567890', expected: '3' }
    , { input: '12345678', expected: '5' }
    , { input: '12444148', expected: '-' }
    , { input: '1234567897', expected: '0' }
    ].forEach(function(testcase) {
      it('should return \'' + testcase.expected + '\' for input \'' + testcase.input + '\'', function() {
        checkdigit.mod11.create(testcase.input).should.eql(testcase.expected);
      });
    });
  });
  describe('validate', function() {
    [ '12345678903'
    , '123456785'
    , '12444148-'
    , '12345678970'
    ].forEach(function(value) {
      it('\'' + value + '\' should be valid', function() {
        checkdigit.mod11.isValid(value).should.be.true;
      });
    });

    [ '12345678900'
    , '123456781'
    , '124441482'
    , '12345678973'
    ].forEach(function(value) {
      it('\'' + value + '\' should be invalid', function() {
        checkdigit.mod11.isValid(value).should.be.false;
      });
    });
  });
});
