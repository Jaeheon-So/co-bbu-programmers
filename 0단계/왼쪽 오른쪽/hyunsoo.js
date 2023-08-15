function solution(str_list) {
    var answer = [];
    const idxL = str_list.indexOf('l') === -1 ? Infinity : str_list.indexOf('l')
    const idxR = str_list.indexOf('r') === -1 ? Infinity : str_list.indexOf('r')
    
    if(idxL === Infinity && idxR === Infinity) return answer    
    if(idxL < idxR) {
        return answer = str_list.slice(0, idxL)
    } else {
        answer = str_list.slice(idxR+1)
    }
    return answer;
}