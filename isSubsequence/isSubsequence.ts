'use strict';

const isSubsequence = (haystack : string, needle : string) : boolean => {
    if (haystack.indexOf(needle) > -1) {
        return true;
    }
    
    let left : number = 0;
    for (let char of needle) {
        if (haystack.slice(left).indexOf(char) === -1) {
            return false;
        }
    }
    
    return true;
}

export default isSubsequence;
