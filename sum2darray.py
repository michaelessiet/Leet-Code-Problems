array = [[1,2,3],[8,9,4],[7,6,5]]

def sumarray():
  x=0
  for i in array:
    for j in i:
      x=x+j
  return x

print(sumarray())