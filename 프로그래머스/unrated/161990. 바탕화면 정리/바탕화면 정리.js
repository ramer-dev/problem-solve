function solution(wallpaper) {
    var answer = [];
    let temp = {x:[], y:[]}
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                temp['x'].push(i)
                temp['y'].push(j)
            }
        }
    }
    
    let [lux, luy, rdx, rdy] = [Math.min(...temp['x']), Math.min(...temp['y']), Math.max(...temp['x']), Math.max(...temp['y'])]
    return [lux, luy, rdx+1, rdy+1];
}