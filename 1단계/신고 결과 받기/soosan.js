const solution = (id_list, report, k) => {
  let answer = new Array(id_list.length);
  answer.fill(0);
  let report_list = {};

  id_list.forEach((v) => {
    report_list[v] = [];
  });

  report.forEach((v) => {
    v = v.split(" ");
    if (!report_list[v[1]].includes(v[0])) report_list[v[1]].push(v[0]);
  });

  console.log(report_list);

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].forEach((v) => {
        answer[id_list.indexOf(v)] += 1;
      });
    }
  }

  return answer;
};

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
