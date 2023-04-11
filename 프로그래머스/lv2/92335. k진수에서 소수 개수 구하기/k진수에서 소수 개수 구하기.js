function solution(n, k) {
    const isPrime = (num) => {
        if (num === 1) return false;
        for(let i = 2; i * i <= num; i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    let answer = 0;

    n.toString(k).split('0').forEach(t => {
        if(t.length){
            if(isPrime(+t)) answer++;
        }
    });
    
    return answer;
}