// 프로그래머스_타겟넘버
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  const dfs = (idx, sum) => {
    idx++;
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return answer;
}

// 풀이까지 걸린 시간 20분
// dfs 재귀를 이해하기 딱 좋은 문제인 것 같다.
// 여러번 복습하면 좋을 듯
