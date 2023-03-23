function solution(n, m, section) {
    const arr = new Array(n).fill(true)
    let answer = 0;
    for(let i of section){
        arr[i-1] = false;
    }
    
    
    for(let i = n-1; i >= 0; i--){
        if(!arr[i]){
            answer++;
            for(let j = i; j > i - m; j--){
                arr[j] = true
            }
        }
    }
    return answer
}