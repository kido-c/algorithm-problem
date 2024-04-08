/**
 * 2748 문제
 * 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
 * 이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
 * n=17일때 까지 피보나치 수를 써보면 다음과 같다.
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
 * n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(fileSync).toString().trim();

function fib(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;

  let prev = 0;
  let current = 1;
  let target = 1;

  while (target < number) {
    let next = BigInt(prev) + BigInt(current);
    prev = current;
    current = next;

    target++;
    if (target === number) {
      return next;
    }
  }
}

console.log(fib(Number(input)));

/**
 * 풀이시간 10분내외 ( Bigint 제외 )
 *
 * 피보나치 문제는 재귀적인 방법으로도 가능하지만, 최대한 다르게 풀어볼려고함.
 * 작은 숫자에서는 값들이 일치하게나오지만.
 * js가 표현할 수 있는 정수 숫자의 범위를 넘어가면 합의 값이 이상하게 나옴
 * Bigint에 대한 처리를 어떻게 해야할지 모르겠음.
 */
