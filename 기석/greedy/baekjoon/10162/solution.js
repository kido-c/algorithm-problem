const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
//   .split("\n");

const TIME_TABLE = {
  A: 0,
  B: 0,
  C: 0,
};

let calculatedTime = Number(input);
let result;

while (calculatedTime > 0) {
  if (calculatedTime < 10) {
    result = -1;
    break;
  }
  if (calculatedTime >= 300) {
    calculatedTime = calculatedTime - 300;
    TIME_TABLE.A++;
  } else if (calculatedTime >= 60) {
    calculatedTime = calculatedTime - 60;
    TIME_TABLE.B++;
  } else {
    calculatedTime = calculatedTime - 10;
    TIME_TABLE.C++;
  }
}

if (result !== -1) {
  result = Object.values(TIME_TABLE);
  console.log(result[0], result[1], result[2]);
} else {
  console.log(result);
}
