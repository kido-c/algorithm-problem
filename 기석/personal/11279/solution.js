const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(fileSync).toString().trim().split("\n");

let start = new Date(); // 시작

const [N, ...cases] = input;

const convertCases = cases.map(Number);

let queue = [];
let result = [];

for (let i = 0; i < 100000; i++) {
  //   if (convertCases[i] !== 0) {
  //     queue.push(convertCases[i]);
  //   } else {
  //     if (queue.length === 0) {
  //       result.push(0);
  //     } else {
  //       let maxNumber = queue.pop();
  //       result.push(maxNumber);
  //     }
  //   }
  queue.sort((a, b) => a - b);
}

console.log(result.join("\n"));

let end = new Date();
const elapsedMSec = end.getTime() - start.getTime();

console.log(elapsedMSec);
