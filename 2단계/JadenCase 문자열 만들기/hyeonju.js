function solution(s) {
  let answer = [];
  s.split(' ').map(item => {
    if (item !== '') {
      answer.push(item[0].toUpperCase() + item.slice(1).toLowerCase())
    } else {
      answer.push('')
    }
  })
  return answer.join(' ')
}