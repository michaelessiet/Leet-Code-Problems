from turtle import numinput

from numpy import number


array = [1,2,3,4,5]
numbers = input('how many numbers do you want to multiply? ')
numbers_array = numbers.split(' ')

def multiplyarray():
  x=1
  for number in numbers_array:
    x=x*int(number)
  return x

print(multiplyarray())