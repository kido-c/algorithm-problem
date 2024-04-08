const fs = require("fs");
const fileSync =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(fileSync).toString().trim().split("\n");

let [N, A, M, target] = input;

let sortA = A.split(" ").map(Number);
sortA.sort((a, b) => a - b);
target = target.split(" ").map(Number);

function binarySearch(n) {
  let start = 0;
  let end = sortA.length - 1;
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (sortA[mid] === n) {
      result = 1;
      return result;
    } else if (sortA[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

let findResult = [];
for (let i = 0; i < target.length; i++) {
  let find = binarySearch(target[i]);

  findResult.push(find);
}

console.log(findResult.join("\n"));

/**
 * ! solved
 * 큰숫자의 정렬에 대해서 검색해보자
 */
