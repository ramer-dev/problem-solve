function solution(k, dungeons) {
    const output = []
    const answer = [];
    
    // 순열을 구하는 로직. 
    // [1,2,3] 의 경우
    // [[1,2,3], [1,3,2] ... [3,2,1]]을 구한다.
    const permutation = (permu, rests, output) => {
        if (rests.length == 0) {
            return output.push(permu);
        }
        rests.forEach((v,idx) => {
            const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
            permutation([...permu,v], rest, output);
        })
    }

    // 전체 순열을 구하여 output 변수에 담아준다.
    permutation([], dungeons, output)
    
    // 각각 순열 아이템 조회
    for(let road of output){
        
        // 현재 아이템 별 변수 선언
        // 현재 남은 피로도 current, 카운트 횟수 cnt;
        let current = k;
        let cnt = 0;
        for(let i of road){
            if(i[0] <= current){
            current -= i[1]
            cnt++;
            }
        }
        // 루프 종료 전에 cnt를 answer 배열에 담아준다. 
        answer.push(cnt);
    }
    
    // answer 배열에서 Max값을 구하여 리턴한다.
    return Math.max(...answer)
}