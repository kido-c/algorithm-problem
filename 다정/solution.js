//매일 측정한 온도가 정수의 수열로 주어졌을 때, 연속적인 며칠 동안의 온도의 합이 가장 큰 값을 계산하는 프로그램을 작성
const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n");

let totalNumberOfDays = input[0].split(' ').map(n=>+n)[0];
let DaysInARow = input[0].split(' ').map(n=>+n)[1];
let DaysList = input[1].split(' ').map(n=>+n);
let sumList = [];

for(let i=0; i< totalNumberOfDays - DaysInARow+1 ; i++){
  let sum =0;
  DaysList.slice(i, i+DaysInARow).forEach(n => sum+=n );
  sumList.push(sum);
}

console.log(Math.max(...sumList));