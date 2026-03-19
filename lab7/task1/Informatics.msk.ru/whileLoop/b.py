n = int(input())

i = 1
x=0
while i < n:
    if(n%i==0 and i>1):
        x+=i
        break
    i += 1
print(x)