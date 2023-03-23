function solution(stones, k) {
    var answer = 0;
    const findMin = (array) => array.reduce((a, b) => Math.min(a, b));
    const findMax = (array) => array.reduce((a, b) => Math.max(a, b));
    //찾아야 하는것 : K이하의 연속된 K개의 숫자 (혹은 n + k)가 될 수도 있음
    // stones : 200000개, k : 200000개 이므로 전부 조사 불가
    // N^2 안댐
    // Math 는 오류 뜸
    // 이분탐색 드가자~
    const copiedArray = stones.slice(0);
    let left = 1;
    let right = findMax(stones);
        
    while (left <= right){
        // 돌의 n번째 숫자 === n번째 사람이 징검다리를 건너는 것?????
        // 이분탐색으로 left,right 범위의 중간값을 얻는다.
        
        let mid = parseInt((left+right) / 2);
        for(let i = 0; i < stones.length; i++){
            let temp = stones[i] - mid + 1;
            stones[i] = temp > 0 ? temp : 0
        }
        
        // 연산 결과가 나왔으면         
        // 한번 더 돌면서 검사
        // 0이 k개 이상 연속으로 있으면 루프 빠져나옴
        let peek = 0;
        for(let i = 0; i < stones.length; i++){
            if(stones[i] == 0) peek++;
            else peek = 0;

            if(peek === k) break;
        }
        
        // 기존에 복사했던 배열에서 다시 불러옴.
    
        stones = copiedArray.slice(0);
        
        if(peek < k){
            answer = Math.max(answer, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}