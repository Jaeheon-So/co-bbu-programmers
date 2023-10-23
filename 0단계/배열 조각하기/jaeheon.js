function solution(arr, query) {
  return query.reduce(
    (res, q, idx) => (idx % 2 === 0 ? res.slice(0, q + 1) : res.slice(q)),
    arr
  );
}
