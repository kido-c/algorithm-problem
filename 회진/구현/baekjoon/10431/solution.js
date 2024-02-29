// 줄세우기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const out = Number(input.shift()); // 맨 처음 모든 케이스 갯수는 배열에서 빼버림

input.forEach((item) => {
  const [n, ...arr] = item.split(" ").map(Number); // forEach 돌면서 케이스 번호와 키들을 하나씩 빼줌
  let count = 0;
  arr.forEach((el, idx) => {
    // 키 배열로 다시 forEach
    for (let i = 0; i < idx; i++) {
      // 각각의 키에서 만약 다른 키보다 첫번째 키가 더 크면 자리를 옮기니깐 count 숫자 올림
      if (arr[i] > el) count++;
    }
  });
  console.log(n, count); // 케이스 번호와 count가 총 케이스 총 갯수만큼 나옴
});
