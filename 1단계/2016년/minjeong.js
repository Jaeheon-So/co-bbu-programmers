function solution(a, b) {
  let count = 0;
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < a; i += 1) {
    count += month[i + 1];
  }
  count += b;
  return days[(count + 4) % 7];
}
