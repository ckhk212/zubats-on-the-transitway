hammingDistance = (string1, string2) ->
    c = 0
    c += string1[i] != string2[i] for i in [0...string1.length]
    c
