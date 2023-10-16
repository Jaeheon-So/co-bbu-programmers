function solution(arr) {
  let idx = arr.findIndex((s) => s === "l" || s === "r");

  return arr[idx] === "r" ? arr.slice(idx + 1) : arr.slice(0, idx);
}
