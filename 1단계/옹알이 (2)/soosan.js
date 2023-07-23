function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"]
  let answer = 0;

  babbling.map((babyWord) => {
    let progress = true
    let beforeWord = ''

    while (progress) {
      for (let i = 0; i < words.length; i++) {
        // 첫 글 읽을 수 있는 글인지
        if (babyWord.indexOf(words[i]) === 0) {
          // 연속되는 애는 아닌지
          if (beforeWord !== words[i]) {
            // 연속되는 단어를 체크하기 위해 beforeWord 업데이트
            beforeWord = words[i]
            // 연속되지도 않고 전 단어와 연속되지도 않는다면 단어에서 이미 발음한 단어를 빼줌
            babyWord = babyWord.slice(words[i].length)
            // 반복문을 종료한다. while문은 종료되지 않기 때문에 같은 단어가 나오더라도 상관없음 일단 break
            break
          } else {
            // 연속되는 단어는 발음 자체가 안되니까 for문, while문 종료
            progress = false
            break
          }
        } else {
          // words의 어떤 단어도 첫 단어부터 발음하지 못했다면 그냥 종료
          if (i === words.length - 1) {
            progress = false
            break
          }
        }
      }
      // 한 바퀴 돌아서 babyWord 하나를 판단했다면 answer 올림
      if (babyWord.length === 0) {
        answer++
        progress = false
      }
    }
  })

  return answer;
}