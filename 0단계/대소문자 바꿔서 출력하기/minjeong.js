const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  answer = "";
  for (let x of str) {
    if (x.toLowerCase() === x) {
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
  }
  console.log(answer);
});
