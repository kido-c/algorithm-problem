// 주몽

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]); //전체 재료의 갯수
const M = Number(input[1]); // M 만큼 모여야 갑옷 완성
const material = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(input);
console.log(material);

let num = 0;
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (material[i] + material[j] === M) {
      num++;
    }
  }
}

console.log(num);
