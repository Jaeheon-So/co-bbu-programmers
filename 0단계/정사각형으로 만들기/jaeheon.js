function solution(arr) {
  if (arr[0].length >= arr.length) {
    while (arr[0].length !== arr.length) arr.push(Array(arr[0].length).fill(0));
    return arr;
  } else {
    return arr.map((a) => {
      while (a.length !== arr.length) a.push(0);
      return a;
    });
  }
}
