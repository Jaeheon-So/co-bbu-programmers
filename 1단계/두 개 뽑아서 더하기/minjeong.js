function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = 1; j < numbers.length; j += 1) {
      if (!answer.includes(numbers[i] + numbers[j]) && i !== j) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
