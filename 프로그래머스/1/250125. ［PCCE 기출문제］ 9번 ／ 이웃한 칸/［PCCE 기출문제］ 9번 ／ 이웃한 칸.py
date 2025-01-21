from collections import deque

def solution(board, h, w):
    answer = 0
    target = board[h][w]
    n = len(board)
    if h - 1 >= 0:
        if board[h-1][w] == target:
            answer += 1
            
    if w - 1 >= 0:
        if board[h][w-1] == target:
            answer += 1
    
    if h + 1 < n:
        if board[h+1][w] == target:
            answer += 1
    
    if w + 1 < n:
        if board[h][w+1] == target:
            answer += 1
    
    
    return answer