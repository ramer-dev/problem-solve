function solution(name, yearning, photo) {
    var answer = [];
    const data = {}
    
    for(let i = 0; i < name.length; i++){
        data[name[i]] = yearning[i];
    }
    
    for(let names of photo){
        answer.push(names.reduce((acc, cur) => {
            return acc + (data.hasOwnProperty(cur) ? data[cur] : 0)
        },0))
    }
    
    return answer;
}