function solution(s, n) {
  let answer = '';
  let charCode = 0
  for (let item of s) {
    if (item.charCodeAt() === 32) {
      charCode = 32
    }
    else if (item.charCodeAt() <= 90 && item.charCodeAt() + n > 90) {
      charCode = item.charCodeAt() + n - 26
    } else if (item.charCodeAt() >= 97 && item.charCodeAt() + n > 122) {
      charCode = item.charCodeAt() + n - 26
    } else {
      charCode = item.charCodeAt() + n
    }
    answer += String.fromCharCode(charCode)
  }
  return answer;
}