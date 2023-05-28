function solution(arr)
{
    var answer = [];
    let curr = -1;
    for (let i of arr){
        if(curr !== i){
            answer.push(i);
            curr = i;
        }
    }
    return answer;
}