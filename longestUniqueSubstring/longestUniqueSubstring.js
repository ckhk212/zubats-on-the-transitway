'use strict';

function longestUniqueSubstring(s) {
    let x = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const q = s.slice(i, j);
            const w = new Set([...q]);
            
            if (w.size === q.length) {
                x = Math.max(x, w.size);
            }
        }
    }
    
    return x;
}

export default longestUniqueSubstring;
