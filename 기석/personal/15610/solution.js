const fs = require("fs");

const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = Number(fs.readFileSync(fileSync).toString().trim());

const result = (Math.sqrt(input) * 4).toFixed(8);
const sliceIndex = result.split("").findIndex((v) => v === "0");
console.log(sliceIndex);
const final = sliceIndex ? result.slice(0, sliceIndex + 1) : result;
console.log(final);
