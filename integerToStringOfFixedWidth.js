'use strict';

function integerToStringOfFixedWidth(number, width) {
    const n = String(number);
    
    if (n.length === width) {
        return n;
    }
    
    if (n.length < width) {
        return '0'.repeat(width - n.length) + n;
    }
    
    return n.slice(-width);
}

export default integerToStringOfFixedWidth;
