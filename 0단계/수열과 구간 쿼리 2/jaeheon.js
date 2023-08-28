function solution(arr, queries) {
  return queries.reduce((res, q) => {
    let num =
      arr
        .slice(q[0], q[1] + 1)
        .sort((a, b) => a - b)
        .find((v) => v > q[2]) || -1;
    return [...res, num];
  }, []);
}
