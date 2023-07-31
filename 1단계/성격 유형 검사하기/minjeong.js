function solution(survey, choice) {
  let answer = "";
  const result = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  for (let i = 0; i < survey.length; i += 1) {
    if (survey[i].includes("R")) {
      if (choice[i] < 4) {
        result[0][survey[i][0]] += 4 - choice[i];
      } else if (choice[i] > 3) {
        result[0][survey[i][1]] += choice[i] - 4;
      }
    } else if (survey[i].includes("C")) {
      if (choice[i] < 4) {
        result[1][survey[i][0]] += 4 - choice[i];
      } else if (choice[i] > 3) {
        result[1][survey[i][1]] += choice[i] - 4;
      }
    } else if (survey[i].includes("J")) {
      if (choice[i] < 4) {
        result[2][survey[i][0]] += 4 - choice[i];
      } else if (choice[i] > 3) {
        result[2][survey[i][1]] += choice[i] - 4;
      }
    } else if (survey[i].includes("A")) {
      if (choice[i] < 4) {
        result[3][survey[i][0]] += 4 - choice[i];
      } else if (choice[i] > 3) {
        result[3][survey[i][1]] += choice[i] - 4;
      }
    }
  }

  if (result[0].R > result[0].T || result[0].R === result[0].T) {
    answer += "R";
  } else {
    answer += "T";
  }

  if (result[1].C > result[1].F || result[1].C === result[1].F) {
    answer += "C";
  } else {
    answer += "F";
  }

  if (result[2].J > result[2].M || result[2].J === result[2].M) {
    answer += "J";
  } else {
    answer += "M";
  }

  if (result[3].A > result[3].N || result[3].A === result[3].N) {
    answer += "A";
  } else {
    answer += "N";
  }
  return answer;
}
