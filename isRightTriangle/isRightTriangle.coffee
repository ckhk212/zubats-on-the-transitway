isRightTriangle = (a, b, c) ->
    sides = [a, b, c].sort((a, b) -> a - b);
    sides[0] ** 2 + sides[1] ** 2 == sides[2] ** 2
