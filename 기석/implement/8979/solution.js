const fs = require("fs");

const fileSync =
  process.platform === "linux" ? `/dev/stdin` : __dirname + "/input.txt";

const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [caseCount, targetCountry] = input[0].split(" ").map(Number);

const cases = input.slice(1).map((v) => v.split(" ").map(Number));

const target = cases.filter((v) => targetCountry === v[0]);
let currentRank = 1;

const TARGET_COUNTRY_SCORE = {
  gold: target[0][1],
  silver: target[0][2],
  brown: target[0][3],
};

for (let i = 0; i < caseCount; i++) {
  if (cases[i][0] === targetCountry) continue;

  if (
    cases[i][1] === TARGET_COUNTRY_SCORE.gold &&
    cases[i][2] === TARGET_COUNTRY_SCORE.silver &&
    cases[i][3] === TARGET_COUNTRY_SCORE.brown
  ) {
    continue;
  }
  if (cases[i][1] > TARGET_COUNTRY_SCORE.gold) {
    currentRank++;
  } else if (cases[i][1] === TARGET_COUNTRY_SCORE.gold) {
    if (cases[i][2] > TARGET_COUNTRY_SCORE.silver) {
      currentRank++;
    } else if (cases[i][2] === TARGET_COUNTRY_SCORE.silver) {
      if (cases[i][3] > TARGET_COUNTRY_SCORE.brown) {
        currentRank++;
      }
    }
  }
}

console.log(currentRank);
