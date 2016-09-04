'use strict';

const hammingDistance = (string1 : string, string2 : string) : number => {
    let c : number = 0;
    
    for (let i : number = 0; i < string1.length; i++) {
	    if (string1[i] !== string2[i]) {
            c++;
	    }
    }
    
    return c;
}

export default hammingDistance;
