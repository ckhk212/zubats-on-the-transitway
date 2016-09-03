'use strict';

function countInversions(arr) {
    for (let i = 0, c = 0; i < inputArray.length - 1; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            c += inputArray[i] > inputArray[j];
        }
    }
    
    return c;
}

export default countInversions;
