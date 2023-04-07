function solution(elements) {
    const set = new Set();
    
    elements = elements.concat(elements);
    // console.log(elements)
    
    // 1부터 길이가 n까지의 수열 탐색
    for (let i = 1; i<= elements.length/2; i++){
        for(let j = 0; j <= elements.length/2; j++){
            set.add(elements.slice(j, j+i).reduce((acc,cur) => acc + cur,0))
        }
    }
    
    // console.log(set)
    
    return set.size;
}