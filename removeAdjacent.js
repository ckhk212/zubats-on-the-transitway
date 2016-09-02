'use strict';

function removeAdjacent(str) {
    if (!str) {
        return str;
    }
    
    let result = str[0];
    for (let i = 1; i < str.length; ++i) {
        if (str[i] !== result[result.length - 1]) {
            result += str[i];
        }
    }
    
    return result;
}

export default removeAdjacent;
