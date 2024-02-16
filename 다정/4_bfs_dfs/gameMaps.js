// 게임 맵 최단거리 BFS

function solution(maps) {
    const xLength = maps[0].length;
    const yLength = maps.length;
    
    const xGoal = xLength - 1;
    const yGoal = yLength - 1;
   
    //상하좌우 이동
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
   
    const queue = [];
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        const [curX, curY, move] = queue.shift();
        if(curX === xGoal && curY === yGoal ) return move;
        
        // 상하좌우 체크 -> 여러개면 queue에 쌓임
        for(let i = 0; i < 4; i++) {
            const xNext = curX + dx[i];
            const yNext = curY + dy[i];
            
            if(xNext >= 0 && xNext < xLength && yNext >= 0 && yNext < yLength && maps[xNext][yNext] === 1) {
                queue.push([xNext, yNext, move + 1]);
                maps[xNext][yNext] = 0;
            }
        }
    }
    return -1;
}


// 다른 답안을 참고함. 내 풀이로 만들려고 노력했음