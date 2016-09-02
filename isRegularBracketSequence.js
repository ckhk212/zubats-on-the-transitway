'use strict';

function isRegularBracketSequence(sequence) {
    let stack = [];
    for (let char of sequence) {
        if (char === '(' || char === '[') {
            stack.push(char);
        } else {
            const last = stack.pop();
            if ((char === ')' && last !== '(') || (char === ']' && last !== '[')) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

export default isRegularBracketSequence;
