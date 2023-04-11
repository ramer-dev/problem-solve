from itertools import permutations

def is_prime_number(x):
    # 2부터 (x - 1)까지의 모든 수를 확인하며
    if x <= 1:
        return False
    
    for i in range(2, x):
        # x가 해당 수로 나누어떨어진다면
        if x % i == 0:
            return False # 소수가 아님
    return True # 소수임


def solution(numbers):
    answer = 0
    arr = list(numbers)
    duplicate = []
    
    for i in range(1, len(numbers) + 1):
        a = tuple(permutations(numbers,i))
        
        for j in range(len(a)):
            k = int(''.join(a[j]))
                    
            if is_prime_number(k) and k not in duplicate:
                print(k)
                duplicate.append(k)
                answer += 1
    
    return(answer)