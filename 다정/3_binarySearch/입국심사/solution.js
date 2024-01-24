// 입국 심사
function solution(n, times) {
  times.sort((a,b)=> a-b);
   let leastTime = n * times[0];
   let mostTime = n * times[times.length-1];
   
   //감이 안온다
   return leastTime
   
}