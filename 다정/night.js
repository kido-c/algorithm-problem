// 왕실의 나이트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const x = input.charCodeAt(0) - 97 + 1;
const y = Number(input[1]);

function solution(x, y){
    const actions = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]];

    let count = 0;
    for(let i = 0; i < 8; i++){
        const nx = x + actions[i][0];
        const ny = y + actions[i][1];

        if(nx < 1 || nx > 8 || ny < 1 || ny > 8)
            continue;
        count++;
    }
    return count;
}

console.log(solution(x, y));

// 풀이를 참고하여 작성했습니다!
