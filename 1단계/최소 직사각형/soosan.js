const solution = (sizes) => {
  let min = []
  let max = []

  for (let x of sizes) {
    min.push(Math.min(...x))
    max.push(Math.max(...x))
  }

  return Math.max(...min) * Math.max(...max)
}