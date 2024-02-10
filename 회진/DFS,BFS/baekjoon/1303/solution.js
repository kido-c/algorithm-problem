//전쟁-전투
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, M).map((ele) => ele.split(""));
const dy = [0, 0, 1, -1];
const dx = [-1, 1, 0, 0];

console.log();
// 답지를 보면 비슷해보이지만 왜 이게 bfs 문제인지 모르겠어요. 이차배열 무조건 bfs ?
// 조금만 꼬여도 왜 이게 이런 문제인지 이해가 안가요..ㅜㅜ
