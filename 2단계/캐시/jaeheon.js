function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  if (cacheSize === 0) return 5 * cities.length;

  cities = cities.map((city) => city.toLowerCase());

  for (let city of cities) {
    if (cache.includes(city)) {
      cache.unshift(city);
      cache = [...new Set(cache)];
      answer += 1;
    } else {
      if (cache.length >= cacheSize) {
        cache.pop();
      }
      cache.unshift(city);
      answer += 5;
    }
  }

  return answer;
}
