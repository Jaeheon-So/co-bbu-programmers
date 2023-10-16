function solution(s){
    const stack = []
    for(let i = 0; i < s.length; i+=1){
        if(stack[stack.length-1] === s[i]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }    
    return stack.length > 0 ? 0 : 1
}

// 시간 초과
// function solution(s)
// {
//     var answer = 0;        
//     const getAnswer = (word) => {
//         let extra = [...word]
//         for(let i = 0; i < extra.length; i+=1){
//             if(extra[i] === extra[i+1]){
//                 extra.splice(i, 2)
//                 if(extra.length === 0) return answer = 1
//                 getAnswer(extra.join(''))
//                 return
//             }
//         }
//     }
//     getAnswer(s)
//     return answer;
// }