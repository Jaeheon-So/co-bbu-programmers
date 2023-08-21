function solution(ineq, eq, n, m) {
  var answer = 0;  
  switch (ineq+eq) {
      case '<=' :
          return answer = n <= m ? 1 : 0
      case '>=' :
          return answer = n >= m ? 1 : 0
      case '<!' :
          return answer = n < m ? 1 : 0
      case '>!' :
          return answer = n > m ? 1 : 0
      default :
          return answer = 0
  }
}