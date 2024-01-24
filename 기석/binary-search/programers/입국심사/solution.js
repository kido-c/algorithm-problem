/**
프로그래머스 입국심사 문제 level-3
https://school.programmers.co.kr/learn/courses/30/lessons/43238
40분 초과, 반례 찾지 못함
 */

function solution(n, times) {
  let timeArr = [...times];
  let count = 1;
  while (timeArr.length <= n * 2) {
    timeArr[0];
    count++;
    timeArr.push(timeArr[0] * count, timeArr[1] * count);
  }

  timeArr.sort((a, b) => a - b);

  return timeArr[n - 1];
}
