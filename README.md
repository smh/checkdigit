checkdigit
==========

Module to calculate and validate check digits for redundancy checking, using f.ex. mod10 (luhn algorithm) or mod11.

[![Build Status](https://travis-ci.org/smh/checkdigit.png?branch=master)](https://travis-ci.org/smh/checkdigit)

[![browser support](https://ci.testling.com/smh/checkdigit.png)](https://ci.testling.com/smh/checkdigit)

## Installation

    npm install checkdigit

## Usage

```javascript
var checkdigit = require('checkdigit');

checkdigit.mod10.isValid('2345676') // true
checkdigit.mod10.create('234567')   // '6'
checkdigit.mod10.apply('234567')    // '2345676'

checkdigit.mod11.isValid('123456785') // true
checkdigit.mod11.create('12345678')   // '5'
checkdigit.mod11.apply('12345678')    // '123456785'
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Run tests using npm test.
