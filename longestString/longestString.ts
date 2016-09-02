'use strict';

const longestString = (arr : string[]) : string => {
    let answer : string = arr[0];
    
    for (let i : number = 1; i < arr.length; i++) {
        if (arr[i].length > answer.length) {
            answer = arr[i];
        }
    }
    
    return answer;
}

export default longestString;
