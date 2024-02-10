// 타겟 넘버

function solution(numbers, target) {
  let answer = 0; // 타겟 넘버를 만드는 경우의 수

  const dfs = (idx, sum) => {
    // dfs 재귀함수에 현재 인덱스와 총합을 매개변수로 넘겨줌
    if (idx === numbers.length) {
      // 만약 인덱스가 numbers 배열의 길이와 같다면 재귀를 다 돈 거기때문에
      if (sum === target) answer++; // 총합이 타겟 넘버와 같다면 경우의 수를 +1
      return;
    }

    dfs(idx + 1, sum + numbers[idx]); // 현재 인덱스의 다음 인덱스와, 총합에서 현재 인덱스의 값을 더한값/뺀 값으로 재귀함수 호출
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0); // 첫 시작은 0번째 인덱스, 총합은 0으로 시작

  return answer; // 경우의 수 리턴
}
