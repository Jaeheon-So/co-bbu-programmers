function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5
  let runtime = 0;
  let cacheArr = []
  cities.forEach(city => {
    const cityname = city.toUpperCase()
    runtime += cacheArr.includes(cityname) ? 1 : 5

    if (cacheArr.length < cacheSize) {
      cacheArr.push(cityname)
    }
    else {
      if (cacheArr.includes(cityname)) {
        cacheArr.splice(cacheArr.indexOf(cityname), 1)
      }
      else {
        cacheArr.shift()
      }
      cacheArr.push(cityname)
    }

  })
  return runtime
}