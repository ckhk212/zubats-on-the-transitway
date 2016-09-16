'use strict';

function isSubsequence(haystack, needle) {
    if (haystack.indexOf(needle) > -1) {
        return true;
    }
    
    let left = 0;
    for (let char of needle) {
        if (haystack.slice(left).indexOf(char) === -1) {
            return false;
        }
    }
    
    return true;
}

export default isSubsequence;
