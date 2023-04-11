function solution(k, dungeons) {
    var answer = -1;
    const permutation = (permu, rests, output) => {
    if (rests.length == 0) {
        return output.push(permu);
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        permutation([...permu,v], rest, output);
    })
}
    const output = []
    const a = [];
    permutation([], dungeons, output)
    for(let road of output){
        let current = k;
        
        let temp = 0;
        for(let i of road){
            if(i[0] <= current){
            current -= i[1]
            temp++;
            }
        }
        a.push(temp);

    }
    return Math.max(...a)
}