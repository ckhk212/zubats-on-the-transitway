'use strict';

function zigzag(a) {
    const d = [];
    
    for (let i = 1; i < a.length; i++) {
        let value;
        
        if (a[i] > a[i - 1]) {
            value = '+';
        } else if (a[i] < a[i - 1]) {
            value = '-';
        } else {
            value = ' ';
        }
        
        d.push(value);
    }
    
    return d.join('')
        .replace(/--/g, '- -')
        .replace(/\+\+/g, '+ +')
        .split(' ')
        .map(s => s.length)
        .filter((v, i, a) => v === Math.max(...a))
        .pop() + 1;
}

export default zigzag;
