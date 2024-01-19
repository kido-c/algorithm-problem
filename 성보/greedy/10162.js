const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = Number(fs.readFileSync(fileSync).toString().trim());

let range = [300, 60, 10];
let answer = "";

for (let i = 0; i < range.length; i++) {
  answer += `${Math.floor(input / range[i])} `;
  input %= range[i];
}

answer = input !== 0 ? -1 : answer.trim();
console.log(answer);

// 문제 해결하는데 걸린시간 20분
// 문제 난이도 쉬움
// 답 찾는데는 어렵지 않았는데 마지막 출력값 입력할 때 공백을 빼주는것 때문에 헷갈려서 시간이 조금 더 걸렸다.
// [0,4,1].join(' ') 을 하면 마지막에 공백이 추가 되는데 그걸 처리하는데 이상한데 꽂혀서 어려움을 겪었다.
// 결국 다 계산하고 마지막에 공백만 제거해줘서 문제해결
