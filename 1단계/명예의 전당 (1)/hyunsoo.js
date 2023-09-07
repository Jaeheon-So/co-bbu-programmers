function solution(k, score) {
    var answer = [];
    let honorArr = []
    for(let i = 0; i < score.length; i+=1){
        honorArr.push(score[i])
        honorArr.sort((a, b) => b - a)
        if(honorArr.length > k) honorArr.pop()
        answer.push(...honorArr.slice(-1, k))
    }
    return answer;
}