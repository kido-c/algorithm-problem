const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(fileSync).toString().trim());

console.log(input * (input - 1));
