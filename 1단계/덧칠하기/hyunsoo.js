function solution(n, m, section) {
    var answer = 0;
    let max = 0;
    section.forEach((wall) => {
        if(max < wall){
            answer += 1
            max = wall + m - 1
        }
    })
    return answer;
}// 질문하기 풀이 참고