function solution(polynomial) {
  let arr = [0, 0];

  polynomial.split(" + ").forEach((p) => {
    if (p.includes("x")) arr[0] += Number(p.slice(0, p.length - 1)) || 1;
    else arr[1] += Number(p);
  });

  if (arr[0] === 1) arr[0] = "";

  return `${arr[0] !== 0 ? `${arr[0]}x` : ""}${
    arr[0] === 0 || arr[1] === 0 ? "" : " + "
  }${arr[1] ? `${arr[1]}` : ""}`;
}
