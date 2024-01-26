// 2309. 일곱 난쟁이
// 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다ㅋㅋ
// 일곱 난쟁이의 키의 합이 100

const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString().replaceAll('\n', ' ').split(' ').map(n => Number(n)).sort((a,b)=> a-b)

  let sum =0;
  input.forEach(n => {
    sum += n;
  })

  let restNum = sum - 100;

  // 난쟁이 아닌 2명 찾기 
  for(let i=0 ; i < input.length-1; i++ ){
    for(let j=i+1 ; j < input.length; j++ ){
      if((input[i] + input[j]) == restNum) {
        input.splice(i, 1);
        input.splice(j-1,1);
        console.log(input)
      }
    };
  }

