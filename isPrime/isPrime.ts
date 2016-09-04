'use strict';

const isPrime = (x : number) : boolean => {
    x = Math.abs(x);
    
    if (x <= 1 || (x % 2 == 0 && x !== 2)) {
        return false;
    }
    
    for (let i : number = 3; i < x; i += 2) {
        if (x % i === 0) {
            return false;
        }
    }
    
    return true;
}

export default isPrime;
