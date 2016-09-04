'use strict';

const sortByLength = (arr : string[]) : string[] => arr.sort((a : string, b : string) : number => a.length - b.length);

export default sortByLength;
