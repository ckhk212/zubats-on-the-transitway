'use strict';

const sumOfDivisors = (n : number) : number => {
    let s : number = 0;
	
    for (let i : number = 1; i <= n; i++) {
		if (n % i === 0) {
			s += i;
		}
    }
	
    return s;
}

export default sumOfDivisors;
