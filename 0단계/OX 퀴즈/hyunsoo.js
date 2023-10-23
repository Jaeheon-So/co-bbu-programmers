function solution(quiz) {
  var answer = [];
  quiz.forEach(val => {
      const nums = val.split(' ').map(val => {
          if(val === '+' || val === '-') {
              return val
          } else {
              return Number(val)
          }
      })
      
      if(nums[1] === '+' && nums[0] + nums[2] === nums[4]) {
          answer.push('O')
      } else if(nums[1] === '-' && nums[0] - nums[2] === nums[4]) {
          answer.push('O')
      } else {
          answer.push('X')
      }
  })
  return answer;
}