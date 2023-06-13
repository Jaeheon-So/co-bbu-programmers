function solution(n, lost, reserve) {
  let answer = 0;
  let students = Array.from({ length: n }).fill(1);
  lost.forEach((target) => [(students[target - 1] -= 1)]);
  reserve.forEach((target) => {
    students[target - 1] += 1;
  });
  for (let i = 0; i < n; i += 1) {
    if (students[i] === 0 || students[i] === 1) continue;
    if (i !== 0 && students[i - 1] === 0) {
      students[i - 1] += 1;
      students[i] -= 1;
    }
    if (students[i] > 1 && i + 1 !== n && students[i + 1] === 0) {
      students[i + 1] += 1;
      students[i] -= 1;
    }
  }
  answer = students.filter((e) => e >= 1).length;
  return answer;
}
