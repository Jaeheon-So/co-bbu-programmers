function solution(lottos, win_nums) {
  let cntSame = 0;
  let cntZero = 0;

  for (let x of lottos) {
    if (x === 0) cntZero++;
    if (win_nums.includes(x)) cntSame++;
  }

  return [
    cntSame + cntZero !== 0 ? 7 - (cntSame + cntZero) : 6,
    cntSame !== 0 ? 7 - cntSame : 6,
  ];
}
