def solution(data, ext, val_ext, sort_by):
    answer = [[]]
    column = {"code":0, "date":1, "maximum":2, "remain":3}
    
    def is_lower(d):
        return True if d[column[ext]] < val_ext else False
    
    return sorted(list(filter(is_lower, data)), key= lambda x:x[column[sort_by]])
