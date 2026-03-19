#1 Loops
if __name__ == '__main__':
    n = int(input())
    i=0
    while i<n:
        print(i*i)
        i+=1

#2 Say "Hello, World!" With Python
print("Hello, World!")

#3 Python: Division
a = int(input())
b = int(input())
    
print(a//b)
print(a/b)

#4 sWAP cASE
def swap_case(s):
    result = ""
    
    for c in s:
        if c.islower():
            result += c.upper()
        elif c.isupper():
            result += c.lower()
        else:
            result += c
    
    return result
    


if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)


#5 Python If-Else
if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 != 0:
        print("Weird")
    else:
        if 2 <= n <= 5:
            print("Not Weird")
        elif 6 <= n <= 20:
            print("Weird")
        else:
            print("Not Weird")


#6 List Comprehensions
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    result = [[i, j, k] for i in range(x + 1)
                        for j in range(y + 1)
                        for k in range(z + 1)
                        if i + j + k != n]

    print(result)


#7 Arithmetic Operators
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a+b)
    print(a-b)
    print(a*b)
    

#8 Write a function
def is_leap(year):
    leap = False
    
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        leap = True
    
    return leap

year = int(input())
print(is_leap(year))



#9 Print Function
if __name__ == '__main__':
    n = int(input())
    for i in range(1, n + 1):
        print(i, end="")



#10 Find the Runner-Up Score!
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    max_val = max(arr)
    second = -10000

    for x in arr:
        if x != max_val and x > second:
            second = x

    print(second)

