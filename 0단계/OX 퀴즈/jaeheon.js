function solution(quiz) {
  return quiz.reduce(
    (res, q) =>
      eval(q.split(" = ")[0]) === Number(q.split(" = ")[1])
        ? [...res, "O"]
        : [...res, "X"],
    []
  );
}
