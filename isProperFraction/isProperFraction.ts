'use strict';

const isProperFraction = (num : number, den : number) : boolean => Math.abs(num / den) < 1;

export default isProperFraction;
