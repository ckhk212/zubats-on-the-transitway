'use strict';

function countInversions(arr) {
    let c = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            c += arr[i] > arr[j];
        }
    }
    
    return c;
}

export default countInversions;
