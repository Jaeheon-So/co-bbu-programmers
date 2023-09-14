const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(str) {
  return str
    .split("")
    .map((s) => (s.charCodeAt(0) < 97 ? s.toLowerCase() : s.toUpperCase()))
    .join("");
}

rl.on("line", function (line) {
  input = [line];
  console.log(solution(...input));
}).on("close", function () {
  str = input[0];
});
