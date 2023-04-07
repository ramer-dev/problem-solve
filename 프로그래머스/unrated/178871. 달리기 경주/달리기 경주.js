function solution(players, callings) {
    var answer = [];
    const nameMap = {};
    const rankMap = {};  
    
    for(let i in players){
        nameMap[players[i]] = +i+1;
        rankMap[+i+1] = players[i];
    }
    
    for (let i of callings){
        // i가 추월
        let a = nameMap[i];
        
        // 추월당한 사람 이름
        let t = rankMap[+a-1];
        
        // nameMap Swap
        [nameMap[t], nameMap[i]] = [nameMap[i], nameMap[t]];
        
        // rankMap Swap
        [rankMap[a], rankMap[+a-1]] = [rankMap[+a-1], rankMap[a]] 
    }
    
    for (let i in rankMap){
        answer.push(rankMap[i]);
    }
    
    return answer;
}