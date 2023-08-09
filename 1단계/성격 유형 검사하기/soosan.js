function solution(survey, choices) {
  var answer = "";
  let score = [3, 2, 1, 0, 1, 2, 3];
  let surveyScore = {};
  let surveyList = ["R", "T", "C", "F", "J", "M", "A", "N"];

  for (let x of surveyList) {
    surveyScore[x] = 0;
  }

  survey.forEach((v, i) => {
    if (choices[i] > 4 && choices[i] !== 0) surveyScore[v[1]] = surveyScore[v[1]] + score[choices[i] - 1];
    if (choices[i] < 4 && choices[i] !== 0) surveyScore[v[0]] = surveyScore[v[0]] + score[choices[i] - 1];
  });

  for (let i = 0; i < surveyList.length; i += 2) {
    if (surveyScore[surveyList[i]] >= surveyScore[surveyList[i + 1]]) answer += surveyList[i];
    else answer += surveyList[i + 1];
  }

  return answer;
}
