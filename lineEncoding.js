'use strict';

function lineEncoding(str) {
    let length = 0;
    let buffer = '';
    let result = '';
    
    for (let char of str) {
        if (length && char !== buffer) {
            if (length > 1) {
                result += length;
            }

            result += buffer;
            length = 0;
        }
        
        buffer = char;
        length++;
    }
    
    if (length > 1) {
        result += length;
    }
    
    result += buffer;
    
    return result;
}

export default lineEncoding;
