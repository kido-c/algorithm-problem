const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const condition = input[0].split(" ");
const cardsCount = Number(condition[0]);
const targetNumber = Number(condition[1]);

const cards = input[1].split(" ");

let sumCards = [];

for (let i = 0; i < cardsCount; i++) {
  for (let j = 0; j < cardsCount; j++) {
    for (let y = 0; y < cardsCount; y++) {
      if (i !== j && j !== y && i !== y) {
        sumCards.push(Number(cards[i]) + Number(cards[j]) + Number(cards[y]));
      }
    }
  }
}

sumCards.sort(function (a, b) {
  return b - a;
});

if (sumCards.includes(targetNumber)) {
  console.log(targetNumber);
} else {
  const smallNumbers = sumCards.filter((value) => value <= targetNumber);
  console.log(smallNumbers[0]);
}
