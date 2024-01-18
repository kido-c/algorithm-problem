const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const sum = input.reduce((cur, acc) => {
  return cur + acc;
}, 0);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const item = input[i] + input[j];
    if (sum - item === 100) {
      const temp = input.filter((el) => {
        return el !== input[i] && el !== input[j];
      });
      input = temp;
      break;
    }
  }

  if (input.length === 7) break;
}

console.log(input.join("\n"));

// 문제 푸는데 걸린시간 20분
// 문제 난이도 하
// 이번 문제도 빠르게 아이디어를 얻어서 해결할 수 있었지만 중간에 계속 오답이 제출됐다.
// 이유는 두가지 인데 중첩문 바깥쪽에 break를 걸어주지 않은 것.
// 두번째는 출력할 때 join으로 한줄씩 출력하지 않은 것.
// 두가지 때문에 시간이 조금 더 오래걸렸다. 사소한 출력같은것도 꼼꼼하게 살펴보자.
