function solution(numbers) {
  let answer = 0;
  let result = [];

  for (let i = 1; i <= numbers.length; i++) {
    let temp = getPermutations(numbers.split(""), i).map((v) =>
      Number(v.join(""))
    );
    result.push(...temp);
  }

  result = [...new Set(result)];
  result.forEach((v) => {
    if (isPrime(v)) answer++;
  });

  return answer;
}

function getPermutations(arr, n) {
  const result = [];

  if (n === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, origin) => {
    const temp = [origin[idx]];
    const rest = origin.filter((o, i) => i !== idx);
    const newArr = getPermutations(rest, n - 1).map((v) => [...temp, ...v]);
    result.push(...newArr);
  });

  return result;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.ceil(n / 2); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
