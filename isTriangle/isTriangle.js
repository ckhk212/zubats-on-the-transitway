'use strict';

function isTriangle(a, b, c) {
    const sides = [a, b, c].sort((x, y) => x - y);

    return sides[0] + sides[1] > sides[2];
}

export default isTriangle;
