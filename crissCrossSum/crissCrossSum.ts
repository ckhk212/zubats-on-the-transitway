'use strict';

const crissCrossSum = (matrix : number[][], row : number, column : number) : number => {
    return matrix.reduce((acc : number, r : number[]) : number => acc + r[column], 0)
        + matrix[row].reduce((acc : number, value : number) : number => acc + value, 0)
        - matrix[row][column];
}

export default crissCrossSum;
