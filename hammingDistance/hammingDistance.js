'use strict';

function hammingDistance(string1, string2) {
    let c = 0;
    
    for (let i = 0; i < string1.length; i++) {
        c += string1[i] !== string2[i];
    }
    
    return c;
}

export default hammingDistance;
