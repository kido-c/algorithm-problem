const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
//   .split("\n");

let razer = [];
let openBraket = [];
let ironBar = [];
let sliceIronBar = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    razer.push([i, i + 1]);
  } else {
    if (input[i] === "(") {
      openBraket.push(i);
    } else if (
      input[i] === ")" &&
      input[i - 1] !== "(" &&
      openBraket.length !== 0
    ) {
      ironBar.push([openBraket.pop(), i]);
    }
  }
}

for (let i = 0; i < ironBar.length; i++) {
  for (let j = 0; j < razer.length; j++) {
    if (ironBar[i][0] < razer[j][1] && ironBar[i][1] > razer[j][1])
      sliceIronBar++;
  }
}

console.log(sliceIronBar);
