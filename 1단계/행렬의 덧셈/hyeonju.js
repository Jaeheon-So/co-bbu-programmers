function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i += 1) {
    answer[i] = []
    for (let j = 0; j < arr1[0].length; j += 1) {
      answer[i].push(arr1[i][j] + arr2[i][j])
    }
  }
  return answer;
}