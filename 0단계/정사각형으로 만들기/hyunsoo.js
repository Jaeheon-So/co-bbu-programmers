function solution(arr) {
  let row = arr.length
  let column = arr[0].length
  
  if(row === column) return arr
  
  if(row > column){
      for(let i = 0; i < row; i+=1){
          let addArr = Array(row-column).fill(0)
          arr[i].push(...addArr)
      }
  } else {
      let addArr = Array(column-row).fill(Array(column).fill(0))
      arr.push(...addArr)
  }
  
  return arr
}