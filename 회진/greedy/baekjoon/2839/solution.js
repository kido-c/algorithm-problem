const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const A = 5;
const B = 3;
let num = Number(input);
const arr = [0, num / A, num / B];

while (num > 0) {
  if (num >= A) {
    num -= A;
    arr[0]++;
  } else if (num >= B) {
    num -= B;
    arr[0]++;
  } else {
    arr[0] = -1;
    break;
  }
}

const answer = arr.filter((num) => Number.isInteger(num) && num > 0);
if (answer.length > 0) {
  return console.log(Math.min(...answer));
} else {
  return console.log(-1);
}

//노드에서 돌릴땐 정답인데 왜 백준에서는 틀리는지 모르겠음..ㅜㅜ
//브론즈 문제와 비슷해서 금방 풀줄 알았는데ㅜ
