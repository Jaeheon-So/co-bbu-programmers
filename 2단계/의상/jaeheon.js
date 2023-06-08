function solution(clothes) {
  let answer = 1;
  let count = {};

  clothes.forEach((c) => {
    count[c[1]] = count[c[1]] + 1 || 1;
  });

  for (let key in count) {
    answer *= count[key] + 1;
  }

  return answer - 1;
}
