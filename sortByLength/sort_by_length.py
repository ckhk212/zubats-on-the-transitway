def sort_by_length(arr):
	return arr.sort(lambda x,y: cmp(len(x), len(y)))
