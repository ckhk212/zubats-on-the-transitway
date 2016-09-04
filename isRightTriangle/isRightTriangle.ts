'use strict';

const isRightTriangle = (a : number, b : number, c : number) : boolean => {
    const sides = [a, b, c].sort((a : number, b : number) : number => a - b);
    return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
}

export default isRightTriangle;
