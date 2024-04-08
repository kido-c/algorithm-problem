//나무 자르기
const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n");


let treeNumber = input[0].split(' ').map(n => +n)[0]; //나무개수
let whatINeed = input[0].split(' ').map(n => +n)[1]; //목표
let trees = input[1].split(' ').map(n => +n).sort((a,b)=> a-b);
console.log(treeNumber, trees,whatINeed)

//양쪽 끝에서 시작 (투포인터)
let left = trees[0];
let right = trees[treeNumber -1]

while(left <= right){
  let mid = Math.floor((left + right)/2);
  let restOfTree = 0;
  for(let i=0 ;i< trees.length; i++){
    if(mid>trees[i]) continue // 높이 더 낮음
    restOfTree += trees[i] - mid;
  }
 
 
 if(restOfTree >= whatINeed){ 
  left = mid+1
} else{right = mid-1};

}

console.log(right);