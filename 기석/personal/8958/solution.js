const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const cases = input.slice(1).map((v) => v.split(""));

// 배열에 넣었다가 x 만나면 길이 반환하고 비우기

const scores = [];

for (let i = 0; i < cases.length; i++) {
  let corectScore = [];
  let score = 0;
  for (let j = 0; j < cases[i].length; j++) {
    if (cases[i][j] === "O") {
      corectScore.push("O");
      score += corectScore.length;
    } else {
      corectScore = [];
      score += corectScore.length;
    }
  }
  scores.push(score);
}

console.log(scores.join("\n"));
