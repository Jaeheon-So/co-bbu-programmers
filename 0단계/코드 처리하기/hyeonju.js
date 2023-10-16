function solution(code) {
  let mode = 0
  let ret = ''
  Array.from(code).map((item, idx) => {
    if (mode === 0 && item === '1') {
      mode = 1
    } else if (mode === 0 && idx % 2 === 0) {
      ret += item
    } else if (mode === 1 && item === '1') {
      mode = 0
    } else if (mode === 1 && idx % 2 !== 0) {
      ret += item
    }
  })
  return ret ? ret : 'EMPTY';
}