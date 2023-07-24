function solution(lottos, win_nums) {
  let answer = [0, 0];
  const filtered = win_nums.filter(item => {
    return lottos.includes(item)
  })
  const zero = lottos.filter(item => {
    return item === 0
  })
  switch (filtered.length) {
    case 2:
      answer[1] = 5
      break;
    case 3:
      answer[1] = 4
      break;
    case 4:
      answer[1] = 3
      break;
    case 5:
      answer[1] = 2
      break;
    case 6:
      answer[1] = 1
      break;
    default:
      answer[1] = 6;
  }
  answer[0] = zero.length === 6 ? 1 : answer[1] - zero.length
  return answer;
}