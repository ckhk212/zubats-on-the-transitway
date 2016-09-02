'use strict';

const arraySumAdjacentDifference = (inputArray : number[]) : number => {
    let s : number = 0;
    
    for (let i : number = 1; i < inputArray.length; i++) {
        s += Math.abs(inputArray[i] - inputArray[i - 1]);
    }
    
    return s;
}

export default arraySumAdjacentDifference;
