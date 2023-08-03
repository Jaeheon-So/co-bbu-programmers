function solution(survey, choices) {
  let answer = '';
  const map = new Map()
  survey.map((item, index) => {
    let count = 0;
    switch (choices[index]) {
      case 1:
        count = 3
        map.set(item[0], map.get(item[0]) ? map.get(item[0]) + count : count)
        break;
      case 2:
        count = 2
        map.set(item[0], map.get(item[0]) ? map.get(item[0]) + count : count)
        break;
      case 3:
        count = 1
        map.set(item[0], map.get(item[0]) ? map.get(item[0]) + count : count)
        break;
      case 5:
        count = 1
        map.set(item[1], map.get(item[1]) ? map.get(item[1]) + count : count)
        break;
      case 6:
        count = 2
        map.set(item[1], map.get(item[1]) ? map.get(item[1]) + count : count)
        break;
      case 7:
        count = 3
        map.set(item[1], map.get(item[1]) ? map.get(item[1]) + count : count)
        break;
    }
    console.log(map)
  })

  return answer;
}
//푸는중