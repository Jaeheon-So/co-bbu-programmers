function solution(people, limit) {
  var answer = 0;
  let left = 0,
    right = people.length - 1;
  people.sort((a, b) => a - b);
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      answer += 1;
      left += 1;
      right -= 1;
    } else {
      answer += 1;
      right -= 1;
    }
  }
  return answer;
}
