const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const arr = input.split("\n").sort((a, b) => a - b);
const sum = input
  .split("\n")
  .reduce((acc, cur) => Number(acc) + Number(cur), 0);

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (sum - (Number(arr[i]) + Number(arr[j])) === 100) {
      arr.splice(j, 1);
      arr.splice(i, 1);
    }
    if (arr.length === 7) break;
  }
}
console.log(arr.join("\n"));

//출력 값이 배열인줄 알았다가 한참 헤맸고
//string이 아니라 계산이 안됐던거,
//break 필요했던거
