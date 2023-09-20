function solution(numlist, n) {
  var answer = [];
  let arr = [];
  for(let i=0; i<numlist.length; i+=1){
      arr.push([numlist[i], Math.abs(numlist[i]-n)])
  }
  
  arr.sort((a, b) => a[1]-b[1] || b[0]-a[0])
  
  for(let k=0; k<arr.length; k+=1){
      answer.push(arr[k][0])
  }
  
  return answer;
}