'use strict';

const checkPalindrome = (str : string) : boolean => str === str.split('').reverse().join('');

export default checkPalindrome;
