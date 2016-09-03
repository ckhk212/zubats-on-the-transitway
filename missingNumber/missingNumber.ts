'use strict';

const missingNumber = (arr : number[]) : number => {
    arr = arr.sort((a, b) => a - b);
    
    for (let i : number = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
}

export default missingNumber;
