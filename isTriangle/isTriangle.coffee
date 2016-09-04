isTriangle = (a, b, c) ->
    sides = [a, b, c].sort((x, y) -> x - y)
    sides[0] + sides[1] > sides[2]
