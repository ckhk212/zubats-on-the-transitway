'use strict';

function crissCrossSum(matrix, row, column) {
    return matrix.reduce((acc, r) => acc + r[column], 0)
        + matrix[row].reduce((acc, value) => acc + value, 0)
        - matrix[row][column];
}

export default crissCrossSum;
