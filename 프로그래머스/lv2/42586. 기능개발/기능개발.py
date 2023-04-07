def solution(progresses, speeds):
    answer = []
    count = 0
    while len(progresses) != 0:
        if len(progresses) != 0:
            if (progresses[0] >= 100):
                for i in progresses:
                    if i >= 100:
                        count += 1
                    else:
                        break

        for i in range(count):
            progresses.pop(0)
            speeds.pop(0)

        for i in range(count):
            answer.insert(0, count)
            break


        for a in range(len(progresses)):
            progresses[a] += speeds[a]
        count = 0
    answer.reverse()
    return answer