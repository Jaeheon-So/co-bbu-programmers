function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let or = (arr1[i] | arr2[i]).toString(2).padStart(arr1.length, "0");
    answer.push(or);
  }

  answer = answer.map((v) => {
    let temp = "";
    for (let x of v) {
      if (x === "1") temp += "#";
      else temp += " ";
    }
    return temp;
  });

  return answer;
}
