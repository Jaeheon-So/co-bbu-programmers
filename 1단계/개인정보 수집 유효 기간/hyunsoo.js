function solution(today, terms, privacies) {
  var answer = [];
  const expire = new Date(today)
  const termType = {}
  terms.forEach((el) => {
      const [type, term] = el.split(" ")
      termType[type] = Number(term)
  })
  privacies.forEach((el, idx) => {
      const [date, type] = el.split(" ")
      const chDate = new Date(date)
      chDate.setMonth(chDate.getMonth() + termType[type])
      
      if(chDate <= expire) answer.push(idx+1)
  })
  return answer;
}