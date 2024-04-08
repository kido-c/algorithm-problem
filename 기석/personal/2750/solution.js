const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...numbers] = input;

for (i = n - 1; i > 0; i--) {
  // 0 ~ (i-1)까지 반복
  for (j = 0; j < i; j++) {
    // j번째와 j+1번째의 요소가 크기 순이 아니면 교환
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers.join("\n"));
