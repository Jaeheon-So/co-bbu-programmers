function solution(a, b) {
  let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  for (let i = 1; i < a; i++) {
    sum += month[i];
  }

  return day[(sum + b) % 7];
}
