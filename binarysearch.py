import time
from tracemalloc import start

array = [1,2,3,4,5,6,7,8,9,10]
#an array of a million numbers
millionarray = [x for x in range(1, 100000000)]
#start timer
start = time.time()

def binarysearch(array, target):
    low = 0
    high = len(array) - 1
    while low <= high:
        mid = (low + high) // 2
        if array[mid] == target:
            return mid
        elif array[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

print(binarysearch(millionarray, 76000000))
print(time.time() - start)

# secondstart = time.time()

# def linearsearch(array, target):
#     for i in range(len(array)):
#         if array[i] == target:
#             return i
#     return -1

# print(linearsearch(millionarray, 76000000))
# print(time.time() - secondstart)