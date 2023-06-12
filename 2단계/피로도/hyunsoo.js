function solution(k, dungeons) {
  let answer = 0;

  const recur = (currK, count, visit) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visit[i] && currK >= dungeons[i][0]) {
        visit[i] = true;
        recur(currK - dungeons[i][1], count + 1, visit);
        visit[i] = false;
      }
    }
    answer = Math.max(answer, count);
  };

  recur(k, 0, {});
  return answer;
}