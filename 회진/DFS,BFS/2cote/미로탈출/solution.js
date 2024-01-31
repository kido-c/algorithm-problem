// 얼음 얼려먹기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number); //[x,y]
const arr = input.slice(1, N + 1).map((ele) => ele.split("").map(Number)); // 이차배열
