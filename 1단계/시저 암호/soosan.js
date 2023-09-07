const solution = (s, n) => {
  var answer;
  let tempArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let temp = []

  for (let i = 0; i < s.length; i++) {
    let cur = tempArr.indexOf(s[i].toLowerCase())
    let chg = tempArr[(cur + n) % tempArr.length]

    if (s[i] === ' ') temp.push(' ')
    else if (s[i] === s[i].toLowerCase()) temp.push(chg)
    else temp.push(chg.toUpperCase())
  }

  answer = temp.join('')

  return answer;
}