function solution(cards1, cards2, goal) {
  const arr = [...goal]

  for (let x of arr) {
    if (cards1.indexOf(x) === goal.indexOf(x)) {
      cards1.shift()
      goal.shift()
    } else if (cards2.indexOf(x) === goal.indexOf(x)) {
      cards2.shift()
      goal.shift()
    }
  }

  if (goal.length === 0) return "Yes"
  else return "No"
}