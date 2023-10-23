function solution(common) {
  let answer = 0;
  const step1 = common[1] - common[0]
  const step2 = common[2] - common[1]
  if (step1 === step2) answer = step1 + common[common.length - 1]
  else answer = (step2 / step1) * common[common.length - 1]

  return answer;
}