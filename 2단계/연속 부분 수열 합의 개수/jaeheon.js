function solution(elements) {
  const answer = new Set();
  const newArr = [...elements, ...elements];

  for (let i = 0; i < elements.length - 1; i++) {
    let l = 0;
    let r = i;
    let sum = 0;

    for (let j = l; j <= r; j++) sum += newArr[j];
    answer.add(sum);

    while (l < elements.length) {
      sum -= newArr[l++];
      sum += newArr[++r];
      answer.add(sum);
    }
  }

  return answer.size + 1;
}
