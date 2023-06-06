function solution(num_list) {
    const a = num_list.at(-1)
    const b = num_list.at(-2)
    if(a > b){
        num_list.push(a - b)
    } else {
        num_list.push(a*2)
    }
    // console.log(num_list.at(-1))
    return num_list
}