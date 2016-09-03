'use strict';

const lastDigitRegExp = str => str.match(/\d/g).pop();

export default lastDigitRegExp;
