checkdigit
==========

Module to calculate and validate check digits for redundancy checking, using f.ex. mod11 or mod10. Initial version only does mod11.

## Installation

    npm install checkdigit

## Usage

    var checkdigit = require('checkdigit');
    checkdigit.mod11.isValid('123456785') // true
    checkdigit.mod11.create('12345678')   // '5'

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Run tests using npm test.
