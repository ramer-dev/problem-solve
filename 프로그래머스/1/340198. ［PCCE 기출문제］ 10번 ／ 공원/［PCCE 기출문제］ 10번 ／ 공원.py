def solution(mats, park):
    answer = 0
    
    def can_place(mat, x, y):
        """돗자리 크기 mat을 (x, y)에서 놓을 수 있는지 확인"""
        if x + mat > len(park) or y + mat > len(park[0]):
            return False
        for i in range(x, x + mat):
            for j in range(y, y + mat):
                if park[i][j] != '-1':  # 사람이 있는 경우
                    return False
        return True
    
    mats = sorted(mats, reverse=True)
    for mat in mats:
        for i in range(len(park)):
            for j in range(len(park[i])):
                if can_place(mat, i, j): 
                    return mat

    return -1
                            