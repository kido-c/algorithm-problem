//주몽
const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n");

// 이중 for문으로

let totalNum = Number(input[0]);
let resourceNum = Number(input[1]);
let resources = input[2].split(' ').map(n => +n);
let count =0; 

for(let i=0; i<totalNum ; i++){
  for(let j=i+1; j<totalNum ; j++){
    if(resources[i] + resources[j] == resourceNum) count ++;
  }
}

console.log(count);