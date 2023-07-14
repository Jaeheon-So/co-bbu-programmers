function solution(numbers) {
  var answer = 0;    
  
  const isPrime = (num) => {
      if(num <= 1) return false
      if(num === 2) return true
      for(let i=2; i<num; i+=1){
          if(num % i === 0) return false
      }
      return true
  }
  
  let arr = numbers.split('')
  let resultSet = new Set()
  const getPermutation = (arr, fixed) => {
      if(arr.length >= 1){
          for(let i=0; i<arr.length; i+=1){
              const newFixed = fixed + arr[i]
              const copyArr = arr.slice()
              copyArr.splice(i, 1)
              
              if(!resultSet.has(parseInt(newFixed)) && isPrime(parseInt(newFixed)) ) {
                  resultSet.add(parseInt(newFixed))
              }
              
              getPermutation(copyArr, newFixed)
          }
      }
  }
  getPermutation(arr, '')
  return answer = resultSet.size
}