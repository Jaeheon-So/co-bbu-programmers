function solution(sizes) {
  var answer = 0;
  let max = [0, 0]
  for(let i = 0; i < sizes.length; i+=1){
      sizes[i].sort((a, b) => a - b);
      if(max[0] < sizes[i][0]) max.splice(0, 1, sizes[i][0]);
      if(max[1] < sizes[i][1]) max.splice(1, 1, sizes[i][1]);
  }
  return answer = max[0] * max[1];
}

// 비슷한 컨셉 간결한 풀이
// 구조분해할당, forEach
// function solution(sizes) {
//   const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

//   let maxSize = [0, 0];
//   rotated.forEach(([w, h]) => {
//       if (w > maxSize[0]) maxSize[0] = w;
//       if (h > maxSize[1]) maxSize[1] = h;
//   })
//   return maxSize[0]*maxSize[1];
// }