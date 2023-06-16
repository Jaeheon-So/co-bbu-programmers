function solution(k, d) {
  let answer = 0;
  let visited = Array(d.length).fill(0);

  dfs(0, k);

  return answer;

  function dfs(level, k) {
    for (let i = 0; i < d.length; i++) {
      if (!visited[i] && k >= d[i][0]) {
        visited[i] = 1;
        dfs(level + 1, k - d[i][1]);
        visited[i] = 0;
      }
    }
    answer = Math.max(answer, level);
  }
}
