'use strict';

const isTriangle = (a : number, b : number, c : number) : boolean => {
    const sides : number[] = [a, b, c].sort((x : number, y : number) => x - y);

    return sides[0] + sides[1] > sides[2];
}

export default isTriangle;
