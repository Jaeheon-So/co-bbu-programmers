function solution(id_list, report, k) {
  let answer = [];

  let reportCnt = {};
  let reportId = {};

  id_list.forEach((id) => {
    reportId[id] = [];
  });

  report = [...new Set(report)];
  report.forEach((v) => {
    let temp = v.split(" ");
    reportCnt[temp[1]] = reportCnt[temp[1]] + 1 || 1;
    reportId[temp[0]] = [...reportId[temp[0]], temp[1]] || [temp[1]];
  });

  console.log(reportCnt, reportId);

  for (let id in reportId) {
    let temp = 0;
    for (let cnt in reportCnt) {
      if (reportCnt[cnt] < k) continue;
      if (reportId[id].includes(cnt)) temp++;
    }
    answer.push(temp);
  }

  return answer;
}
