crissCrossSum = (matrix, row, column) ->
    matrix.reduce(((acc, r) -> acc + r[column]), 0) +
    matrix[row].reduce(((acc, value) -> acc + value), 0) -
    matrix[row][column]
