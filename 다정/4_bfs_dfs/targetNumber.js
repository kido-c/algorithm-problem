// 타겟넘버 DFS
function solution(numbers, target) {
    let count = 0;
  
    function dfs(depth, sum) {
      if (depth === numbers.length) {
        if (target === sum) {
          count++;
        }
        return;
      }
      dfs(depth + 1, sum + numbers[depth]);
      dfs(depth + 1, sum - numbers[depth]);
    }
      
    dfs(0, 0);
    return count;
  }
  
  // 다른 답안을 참고함. 내 풀이로 만들려고 노력했음