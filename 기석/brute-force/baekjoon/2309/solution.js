const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = [...input];
let sum = input.reduce((acc, cur) => {
  return Number(acc) + Number(cur);
}, 0);
let differenceHundred = sum - 100;

for (let i = 0; i < input.length; i++) {
  if (result.length === 7) break;
  for (let j = 0; j < input.length; j++) {
    if (i !== j && Number(input[i]) + Number(input[j]) === differenceHundred) {
      result = result.filter((value) => {
        return Number(value) !== Number(input[i]);
      });

      result = result.filter((value) => {
        return Number(value) !== Number(input[j]);
      });

      break;
    }
  }
}

result.sort(function (a, b) {
  return a - b;
});
console.log(result.reduce((acc, cur) => acc + "\n" + cur));
