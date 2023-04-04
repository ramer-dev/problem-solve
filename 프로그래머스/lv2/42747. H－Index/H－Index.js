function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => a-b);
    let max = citations.at(-1);
    let min = citations[0]
    
    console.log(citations[Math.floor(citations.length/2)])
    
    return citations[Math.floor(citations.length/2)]
}