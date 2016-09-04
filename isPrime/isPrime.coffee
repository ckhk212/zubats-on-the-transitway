isPrime = (x) ->
    x = Math.abs x
    return false if x <= 1 or (x % 2 == 0 and x != 2)
    (return false if x % i == 0) for i in [3...x] by 2
    true
