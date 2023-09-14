function solution(my_string, queries) {
  queries.map(item => {
    let separator = my_string.slice(item[0], item[1] + 1)
    let reversed = [...separator].reverse().join('')
    my_string = my_string.slice(0, item[0]) + reversed + my_string.slice(item[1] + 1)
  })
  return my_string
}