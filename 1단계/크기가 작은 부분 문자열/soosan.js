const solution = (t, p) => {
  let answer = 0;

  for (let i = 0; i < t.length; i++) {
    let sum = '';
    if (t[i + p.length - 1]) {
      for (let j = 0; j < p.length; j++) {
        sum += t[j + i]
      }

      if (sum <= p) answer++
    }
  }

  return answer;
}

console.log(solution('3141592', '271'))