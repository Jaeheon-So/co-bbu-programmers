function solution(arr) {
  let answer = [];
  const col = arr.length;
  const row = arr[0].length;
  if (col > row) {
    for (let x of arr) {
      for (let i = row; i < col; i += 1) {
        x.push(0);
      }
      answer.push(x);
    }
  } else if (col < row) {
    const newArr = [];
    for (let i = 0; i < row; i += 1) {
      newArr.push(0);
    }
    answer = arr;
    for (let i = col; i < row; i += 1) {
      answer.push(newArr);
    }
  } else {
    answer = arr;
  }
  return answer;
}
