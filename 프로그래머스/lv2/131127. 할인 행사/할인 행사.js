function solution(want, number, discount) {
    let answer = 0;
    const count = number.length;
    const origin = {}

    let sum = 0;
        
    for(let i = 0; i < count; i++){
        origin[want[i]] = number[i];
        sum += number[i];
    }
    for(let i = 0; i + sum <= discount.length; i++){
        const curr = JSON.parse(JSON.stringify(origin));
        for(let j = i; j < sum + i; j++){
            curr[discount[j]]--;
        }
        
        if(Object.values(curr).every(t => t === 0)) answer++;
        
    }
    return answer;
}