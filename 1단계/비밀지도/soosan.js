const solution = (n, arr1, arr2) => {
  var answer = [];
  let map1 = [];
  let map2 = [];

  arr1.forEach((v) => map1.push(v.toString(2)));
  arr2.forEach((v) => map2.push(v.toString(2)));

  for (let i = 0; i < n; i++) {
    if (map1[i].length !== n) {
      for (let i = 0; i < n; i++) {
        map1[i] = map1[i].padStart(n, 0);
      }
    }
    if (map2[i].length !== n) {
      for (let i = 0; i < n; i++) {
        map2[i] = map2[i].padStart(n, 0);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let wall = [];
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "1" || map2[i][j] === "1") wall.push("#");
      else wall.push(" ");
    }
    answer.push(wall.join(""));
  }

  return answer;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
