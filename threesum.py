numbers = [1, 2, 7, 10, 3, 5, 6, 9, 8, 4]
target = 15

def threesum(): 
    for i in numbers:
        for k in numbers:
            for j in numbers:
                if i+j+k == target and i != k != j and i != k and i != j and k != j:
                    print(i, j, k)


threesum()
