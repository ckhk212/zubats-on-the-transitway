fractionSum = (A, B) ->
    if A[1] == B[1]
        [A[0] + B[0], A[1]]
    else
        [
            A[0] * B[1] + B[0] * A[1],
            B[1] * A[1]
        ]
