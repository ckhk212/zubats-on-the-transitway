sumOfDivisors = (n) ->
    s = 0
    (s += i if n % i == 0) for i in [1..n]
    s
