'use strict';

function longestString(arr) {
    let answer = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > answer.length) {
            answer = arr[i];
        }
    }
    
    return answer;
}

export default longestString;
