const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

let targetNubmer = Number(input);
let count = 0;

if (targetNubmer % 5 === 0 && targetNubmer % 3 === 0) {
  while (targetNubmer >= 5) {
    targetNubmer -= 5;
    count++;
  }
} else if (targetNubmer % 3 === 0 && targetNubmer <= 12) {
  while (targetNubmer >= 3) {
    targetNubmer -= 3;
    count++;
  }
} else {
  while (targetNubmer >= 3) {
    let minusFive = targetNubmer - 5;
    let minusThree = targetNubmer - 3;

    if (minusFive === 0 || minusThree === 0) {
      targetNubmer = 0;
      count++;
    } else if (minusFive % 5 === 0 || minusFive % 3 === 0) {
      targetNubmer = minusFive;
      count++;
    } else if (minusThree % 5 === 0 || minusThree % 3 === 0) {
      targetNubmer = minusThree;
      count++;
    } else {
      targetNubmer = minusFive;
      count++;
    }
  }
}

if (targetNubmer > 0) {
  console.log(-1);
} else {
  console.log(count);
}
