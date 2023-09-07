function solution(picture, k) {
  return picture.reduce(
    (res, p) => [
      ...res,
      ...Array(k).fill(
        p
          .split("")
          .map((s) => s.repeat(k))
          .join("")
      ),
    ],
    []
  );
}
