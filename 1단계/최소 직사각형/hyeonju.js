function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.map(item => {
    item.sort((a, b) => a - b)
    width = width < item[0] ? item[0] : width
    height = height < item[1] ? item[1] : height
  })
  return width * height
}