'use strict';

function halvingSum(n) {
    let s = 0;
    
    while (n) {
        s += n;
        n = n / 2 | 0;
    }
    
    return s;
}

export default halvingSum;
