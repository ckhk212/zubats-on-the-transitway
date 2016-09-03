'use strict';

function longestDigitsPrefix(str) {
    const m = str.match(/^\d+/);
    return m ? m[0] : '';
}

export default longestDigitsPrefix;
