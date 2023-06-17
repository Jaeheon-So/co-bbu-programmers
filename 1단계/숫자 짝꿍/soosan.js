const solution = (X, Y) => {
  let answer = "";
  let MapX = new Map();
  let MapY = new Map();
  let arr = [];

  for (let x of X) {
    MapX.set(x, (MapX.get(x) || 0) + 1);
  }
  for (let x of Y) {
    MapY.set(x, (MapY.get(x) || 0) + 1);
  }

  for (let i = 0; i < 10; i++) {
    let key = i.toString();

    if (MapX.has(key) && MapY.has(key)) {
      let n = Math.min(MapX.get(key), MapY.get(key));

      for (let j = 0; j < n; j++) {
        arr.push(i);
      }
    }
  }

  // 런타임 에러 출력 방법
  // arr.sort((a, b) => b - a);
  // if (arr.length === 0) return "-1";
  // if (Number(...arr) <= 0) return "0";

  // return (answer += arr.join(""));

  if (arr.length === 0) return "-1";
  if (Number(arr.sort((a, b) => b - a).join("")) === 0) return "0";

  return arr.sort((a, b) => b - a).join("");
};

console.log(solution("100", "2345"));
