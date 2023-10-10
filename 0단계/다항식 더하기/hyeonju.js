function solution(polynomial) {
  let xNum = 0
  let num = 0
  polynomial.split(' + ').map(item => {
    if (item.includes('x')) {
      xNum += parseInt(item) ? parseInt(item) : 1
    } else {
      num += +item
    }
  })
  const x = xNum ? (xNum === 1 ? 'x' : xNum + 'x') : ''
  return x + (num && xNum ? ' + ' : '') + (num ? num : '')
}