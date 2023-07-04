function solution(food) {
  let answer = '';
  const answerFood = []
  const halfFood = food.map(i => parseInt(i / 2))

  for (let i = 1; i < halfFood.length; i++) {
    for (let j = 0; j < halfFood[i]; j++) {
      answerFood.push(i)
    }
  }

  const reverseFood = [...answerFood].reverse()
  answerFood.push(0, ...reverseFood)

  return answer += answerFood.join('');
}