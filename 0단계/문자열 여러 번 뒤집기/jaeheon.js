function solution(my_string, queries) {
  return queries.reduce(
    (res, q) =>
      res.slice(0, q[0]) +
      res
        .slice(q[0], q[1] + 1)
        .split("")
        .reverse()
        .join("") +
      res.slice(q[1] + 1),
    my_string
  );
}
