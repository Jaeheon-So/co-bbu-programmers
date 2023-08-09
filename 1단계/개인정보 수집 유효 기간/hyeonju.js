//정답코드참고

const calculateDayPast = (year, month, day) => year * 12 * 28 + month * 28 + day

function solution(today, terms, privacies) {
  const todayDayPast = calculateDayPast(...today.split('.').map(stringDate => Number(stringDate)))
  const termsSet = {}
  terms.forEach((term) => {
    const [type, month] = term.split(' ')
    termsSet[type] = Number(month)
  })

  const answer = privacies.map((privacy, privacyNumber) => {
    const [date, type] = privacy.split(' ')
    const [year, month, day] = date.split('.').map(stringDate => Number(stringDate))
    // -1은 보관 가능 n달이 지난 후 하루 전까지이므로 
    const privacyDayPast = calculateDayPast(year, month + termsSet[type], day) - 1

    // 현재 날짜보다 지난 파기할 privacyNumber만 return 
    if (privacyDayPast < todayDayPast) {
      return privacyNumber + 1
    }
    else {
      return null
    }
  }).filter((privacyNumber) => privacyNumber)

  return answer;
}