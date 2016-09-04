# Also available as a built-in function from the fractions module:
# https://docs.python.org/3/library/fractions.html
#
# from fractions import gcd

def gcd(a, b):
    return gcd(b, a % b) if b else a
