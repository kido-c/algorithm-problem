const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(fileSync).toString().trim());

let count = 0;
let target = 0;

while (target < input) {
  count++;

  if (count.toString().includes("666")) {
    target++;
  }
}

console.log(count);
