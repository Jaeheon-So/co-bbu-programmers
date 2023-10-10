function solution(s) {
  let cnt = 0;
  let zero = 0;
  if (s.length === 1) return [0, 0]
  while (s.length > 1) {
    zero += s.replaceAll('1', '').length
    s = s.replaceAll('0', '').length.toString(2)
    cnt += 1
  }
  return [cnt, zero];
}