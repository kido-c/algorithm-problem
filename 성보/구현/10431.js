// 백준_줄세우기
// https://www.acmicpc.net/problem/10431

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

input.forEach((item) => {
  const [n, ...testCase] = item.split(" ").map(Number);
  let cnt = 0;
  testCase.forEach((el, idx) => {
    for (let i = 0; i < idx; i++) {
      if (testCase[i] > el) cnt++;
    }
  });

  console.log(n, cnt);
});

// 문제를 푸는데 걸린 시간 20분
// input을 기준으로 반복물을 돈다.
// test케이스를 나눠주고 테스트 케이스에서 또 한번 반복문을 돈다.
// 만약 testcase[0]번 부터 돌아주면서 el 보다 크면 cnt++ 해준다.
