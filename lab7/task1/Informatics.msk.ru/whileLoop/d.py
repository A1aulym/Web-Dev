n = int(input())

i = 0
c=""
while 2**i <= n:
    if 2**i==n:
        c="Yes"
    else:
        c="No"
    i+=1
print(c)