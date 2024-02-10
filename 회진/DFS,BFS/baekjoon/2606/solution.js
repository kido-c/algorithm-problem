// 바이러스

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const computerNum = input[0];
const directNum = input[1];
const arr = input.slice(2, directNum + 1);
// .map((ele) => ele.split(" ").map(Number)); // 이차배열
// 직접 연결된 컴퓨터 번호

const virus = [1];
let graph = [...new Array(computerNum + 1)].map(() => []);
for (let i = 0; i < computerNum; i++) {
  let start = Number(arr[i + 2].split(" ")[0]);
  let end = Number(arr[i + 2].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

console.log(graph);
