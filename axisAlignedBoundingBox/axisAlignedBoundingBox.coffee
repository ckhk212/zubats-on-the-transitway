axisAlignedBoundingBox = (x, y) ->
    minX = Math.min.apply(Math, x)
    maxX = Math.max.apply(Math, x)
    minY = Math.min.apply(Math, y)
    maxY = Math.max.apply(Math, y)

    (maxX - minX) * (maxY - minY)
