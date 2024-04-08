const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ");
const arr = input[1].split(" ");
const sumArr = [];

for (let i = 0; i < Number(N); i++) {
  for (let j = i + 1; j < Number(N); j++) {
    for (let k = j + 1; k < Number(N); k++) {
      const sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
      if (M >= sum) {
        sumArr.push(sum);
      }
    }
  }
}
const result = sumArr.filter((ele) => M >= ele);
console.log(Math.max(...result));

//전문제랑 똑같이 2개를 빼야지 했다가 완저니 틀려버렸다.
//i + 1 0,1,2가 아니라 저렇게 해줘야하는 이유를 잘 모르겠움..
