const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [info, ...cases] = input;
const [coinCount, targetPrice] = info.split(" ").map(Number);
const coins = cases.map(Number);

coins.sort((a, b) => b - a);

let result = 0;
let sumCoins = 0;
for (let i = 0; i < coinCount; i++) {
  while (sumCoins < targetPrice) {
    sumCoins += coins[i];
    if (sumCoins > targetPrice) {
      sumCoins -= coins[i];
      break;
    } else if (sumCoins === targetPrice) {
      result++;
      break;
    }
    result++;
  }
}

console.log(result);
