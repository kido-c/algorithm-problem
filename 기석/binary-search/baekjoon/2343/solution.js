const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const bluerayCount = Number(input[0].split(" ")[1]);
const recordLectures = input[1].split(" ").map((value) => Number(value));

const maxLectureTime = recordLectures.reduce((acc, cur) => acc + cur);

let start = 0;
let end = maxLectureTime;

while (start <= end) {
  let mid = Math.floor((end - start) / 2);
  console.log(mid);
  let sum = 0;
  let count = 1;

  for (let i = 0; i < recordLectures.length; i++) {
    sum = sum + recordLectures[i];
    if (sum > end * count) {
      count++;
    }
    if (count === bluerayCount) {
      break;
    }
  }
  console.log(count);
  if (count < bluerayCount) {
    start = mid;
  }
}

console.log(maxLectureTime);
