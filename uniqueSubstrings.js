'use strict';

function uniqueSubstrings(input) {
    const hashTable = {};
    
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j <= input.length; j++) {
            const str = input.slice(i, j);
            
            if (!hashTable[str]) {
                hashTable[str] = 0;
            }
            
            hashTable[str]++;
        }
    }
    
    return Object.values(hashTable).filter(value => value === 1).length;
}

export default uniqueSubstrings;
