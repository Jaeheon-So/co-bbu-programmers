function solution(rank, attendance) {
  var answer = 0;
  const rankIdx = []
  rank.map((val, idx) => {
      if(attendance[idx]) rankIdx.push([val, idx])
  })
  rankIdx.sort((a, b) => a[0]-b[0])
  return answer = (10000 * rankIdx[0][1]) + (100 * rankIdx[1][1]) + (1 * rankIdx[2][1])
}