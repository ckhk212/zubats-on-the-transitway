longestUniqueSubstring = (s) ->
    x = 0
    for i in [0..s.length]
        for j in [i+1..s.length]
            q = s[i...j]
            w = new Set q
            x = Math.max(x, w.size) if w.size == q.length
    x
