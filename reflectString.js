'use strict';

function reflectString(str) {
    let result = '';
    for (let char of str) {
        const code = char.charCodeAt() - 'a'.charCodeAt();
        const reflectedCharCode = 'a'.charCodeAt() + 25 - code;
        result += String.fromCharCode(reflectedCharCode);
    }

    return result;
}

export default reflectString;
