function solution(record) {
    const answer = [];
    const order = [];
    const data = {};
    
    for (let i of record){
        const cmd = i.split(' ');
        
        switch (cmd[0]){
            case "Enter":
                order.push([cmd[1], '님이 들어왔습니다.']);
                data[cmd[1]] = {name: cmd[2]};
                break;
            case "Leave":
                order.push([cmd[1], '님이 나갔습니다.']);
                break;
            case "Change":
                data[cmd[1]] = {name: cmd[2]}
                break;
        }
        
        
    }
    for(let i of order){
        const [id, str] = i;
        answer.push(data[id].name + str);
    }

    return answer;
}