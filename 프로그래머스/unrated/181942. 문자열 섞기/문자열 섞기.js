function solution(str1, str2) {
    return str1.split('').map((t,i) => {
        return t + str2[i]
    }).join('');
}