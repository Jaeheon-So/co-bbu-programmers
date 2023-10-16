function solution(picture, k) {
  const extendPicture = picture.map((rows) =>
    Array(k).fill(
      rows
        .split("")
        .map((s) => s.repeat(k))
        .join("")
    )
  );
  const answer = extendPicture.flat();
  return answer;
}
