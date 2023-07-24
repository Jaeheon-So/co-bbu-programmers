function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"]
    for(let babble of babbling) {
        for(let j = 0; j < words.length; j+=1){
            if(babble.includes(words[j].repeat(2))) break
            babble = babble.replaceAll(words[j], " ")            
        }
        babble = babble.replaceAll(" ", "")
        if(babble.length === 0) answer += 1              
    }
    return answer;
}

// 오답
// function solution(babbling) {
//     var answer = 0;
//     for(let i = 0; i < babbling.length; i+=1){
//         let words = ['aya', 'ye', 'woo', 'ma']
//         let result = false
//         let check = babbling[i]
//         const get옹알 = (words, check) => {
//             if(check === '') return result = true
//             for(const word of words){                
//                 if(check.includes(word)) {
//                     words.splice(words.indexOf(word), 1)
//                     let newCheck = check.replace(word, '')
//                     get옹알(words, newCheck)
//                 }                
//             }            
//         }
        
//         get옹알(words, check)
//         if(result) answer += 1
//     }
//     return answer;
// }