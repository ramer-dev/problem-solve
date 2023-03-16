const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('/dev/stdin','utf-8').trim().split(os.EOL);

const data = {
    'black' : {value:0, radix:10**0},
    'brown' : {value:1, radix:10**1},
    'red' : {value:2, radix:10**2},
    'orange' : {value:3, radix:10**3},
    'yellow' : {value:4, radix:10**4},
    'green' : {value:5, radix:10**5},
    'blue' : {value:6, radix:10**6},
    'violet' : {value:7, radix:10**7},
    'grey' : {value:8, radix:10**8},
    'white' : {value:9, radix:10**9}
}

let answer;

for(let i = 0; i < input.length; i++){
    if(i === 0){
        answer = data[input[i]].value*10;
    } else if (i === 1){
        answer += data[input[i]].value;
    } else {
        answer *= data[input[i]].radix;
    }
    
}

console.log(answer)