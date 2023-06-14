function solution(arr1, arr2) {
  let answer = [];
  let sum = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr1[i].length; j += 1) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
    sum = [];
  }
  return answer;
}
