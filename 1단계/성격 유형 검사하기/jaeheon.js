function solution(survey, choices) {
  let answer = "";
  let map = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  survey.forEach((s, idx) => {
    if (choices[idx] <= 3) map[s.split("")[0]] += score[choices[idx]];
    else if (choices[idx] >= 5) map[s.split("")[1]] += score[choices[idx]];
  });

  if (map["R"] >= map["T"]) answer += "R";
  else answer += "T";

  if (map["C"] >= map["F"]) answer += "C";
  else answer += "F";

  if (map["J"] >= map["M"]) answer += "J";
  else answer += "M";

  if (map["A"] >= map["N"]) answer += "A";
  else answer += "N";

  return answer;
}
