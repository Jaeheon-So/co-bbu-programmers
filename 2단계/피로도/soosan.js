const solution = (k, dungeons) => {
  let answer = 0;
  let n = dungeons.length;
  let visited = Array.from({ length: n }, () => false);

  const DFS = (hp, L) => {
    for (let i = 0; i < n; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        DFS(hp - dungeons[i][1], L + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, L);
  };

  DFS(k, 0);

  return answer;
};
