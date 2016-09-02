'use strict';

const gcd = (a, b) => b ? gcd(b, a % b) : a;

export default gcd;
