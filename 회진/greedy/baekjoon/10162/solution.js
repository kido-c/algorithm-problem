const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const A = 300;
const B = 60;
const C = 10;
let num = Number(input);
const answer = [0, 0, 0];

while (num > 0) {
  if (num >= A) {
    num -= A;
    answer[0]++;
  } else if (num >= B) {
    num -= B;
    answer[1]++;
  } else if (num >= C) {
    num -= C;
    answer[2]++;
  } else {
    return console.log(-1);
  }
}
console.log(answer.join(" "));
