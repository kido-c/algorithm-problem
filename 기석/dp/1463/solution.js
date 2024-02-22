/**
 * 1463 문제
 * 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

X가 3으로 나누어 떨어지면, 3으로 나눈다.
X가 2로 나누어 떨어지면, 2로 나눈다.
1을 뺀다.
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
 *
 */

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(fileSync).toString().trim();

function solution(number) {
  if (number === 1) return 0;

  let count = 0;
  let found = false;
  let saveNumber = [number];

  while (!found) {
    let integerNumbers = [];
    for (let i = 0; i < saveNumber.length; i++) {
      if (Number.isInteger(saveNumber[i] / 2)) {
        integerNumbers.push(saveNumber[i] / 2);
      }
      if (Number.isInteger(saveNumber[i] / 3)) {
        integerNumbers.push(saveNumber[i] / 3);
      }
      integerNumbers.push(saveNumber[i] - 1);
    }

    let filterSaveNumber = [...new Set(integerNumbers)];

    saveNumber = filterSaveNumber;

    count++;
    if (filterSaveNumber.includes(1)) {
      found = true;
      break;
    }
  }

  return count;
}

console.log(solution(Number(input)));

/**
 * 풀이 시간 : 20분 내외
 * 영상 처럼 최대한 연산해야하는 값들을 줄여가도록 노력하였다.
 */
