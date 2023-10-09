function solution(array) {
  var answer = 0;
  
  let mapObj = new Map()
  array.forEach(val => {
      mapObj.has(val) ? mapObj.set(val, mapObj.get(val) + 1) : mapObj.set(val, 1)
  })
  
  let newArr = [...mapObj]
  newArr.sort((a, b) => b[1] - a[1])
  
  if(newArr.length > 1){
      return answer = newArr[0][1] === newArr[1][1] ? -1 : newArr[0][0]
  } else {
      return answer = newArr[0][0]
  }
}