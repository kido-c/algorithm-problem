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
