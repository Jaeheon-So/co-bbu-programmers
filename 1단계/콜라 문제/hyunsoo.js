function solution(a, b, n) {
    var answer = 0;
    let coke = 0;
    while(a <= n){
        if(n < a) return;
        //console.log('콜라:', coke, '/', '남은 빈 병:', n)
        coke = Math.floor(n / a) * b;
        n = coke + Math.floor(n % a);
        answer += coke;
    }
    return answer;
}