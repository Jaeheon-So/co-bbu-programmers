function solution(people, limit) {
  let answer = 0;
  let l = 0;
  let r = people.length - 1;

  people.sort((a, b) => a - b);

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      answer++;
      l++;
      r--;
    } else {
      answer++;
      r--;
    }
  }

  return answer;
}
