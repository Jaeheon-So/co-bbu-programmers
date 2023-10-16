const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (str) => {
  console.log(str);
};

let input = [];

rl.on("line", function (line) {
  input = [line];
  solution(...input);
}).on("close", function () {
  str = input[0];
});
