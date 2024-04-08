// 2798. 블랙잭
//카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임


const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n")

  input[0] = input[0].split(' ');
  let totalCount = Number(input[0][0]);
  let M = Number(input[0][1]);

  input[1] = input[1].split(' ');
  let cardLists = input[1].map(n => Number(n)).sort((a,b)=> a-b);
  console.log(cardLists);

  let cardMaxSum = 0;

  for(let i = 0 ; i < totalCount - 2; i++){
    for(let j = i+1 ; i < totalCount - 1; j++){
      for(let k = i+2 ; i < totalCount ; k++){
        let cardSum = cardLists[i] + cardLists[j] + cardLists[k];
       
        if(cardMaxSum < cardSum && M > cardSum){
          cardMaxSum = cardSum;
        }
      }
    }
  }

console.log(cardMaxSum);

// 시간 초과? 뭐가 문제인지 모르겠다! 





