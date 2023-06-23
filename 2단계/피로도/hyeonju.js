function solution(k, dungeons) {
  let answer = -1;
  const dfs = (k, dungeons, prev) => {
    for (let i = 0; i < dungeons.length; i += 1) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;
      const copy = [...dungeons].map(options => [...options]);
      copy[i] = [null, null];
      dfs(k - use, copy, prev + 1);
    }
    return (answer = Math.max(prev, answer));
  };
  dfs(k, dungeons, 0);
  return answer;
}